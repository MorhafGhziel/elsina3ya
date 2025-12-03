import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set');
      return NextResponse.json(
        { error: 'خطأ في إعدادات الخادم. الرجاء التواصل مع الدعم الفني.' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'الرجاء ملء جميع الحقول المطلوبة' },
        { status: 400 }
      );
    }

    const emailHtml = `
      <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #0a0e1a; color: #ffffff;">
        <h2 style="color: #ff7d00; border-bottom: 2px solid #ff7d00; padding-bottom: 10px;">
          رسالة جديدة من موقع الصناعية
        </h2>
        
        <div style="margin-top: 30px; line-height: 1.8;">
          <p><strong style="color: #ff7d00;">الاسم:</strong> ${name}</p>
          <p><strong style="color: #ff7d00;">البريد الإلكتروني:</strong> ${email}</p>
          ${phone ? `<p><strong style="color: #ff7d00;">رقم الهاتف:</strong> ${phone}</p>` : ''}
          <p><strong style="color: #ff7d00;">الرسالة:</strong></p>
          <p style="background-color: #001524; padding: 15px; border-radius: 8px; border-right: 3px solid #ff7d00;">
            ${message.replace(/\n/g, '<br>')}
          </p>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ff7d00; font-size: 12px; color: #8892a6;">
          <p>تم إرسال هذه الرسالة من نموذج التواصل في موقع الصناعية</p>
        </div>
      </div>
    `;

    const emailText = `
رسالة جديدة من موقع الصناعية

الاسم: ${name}
البريد الإلكتروني: ${email}
${phone ? `رقم الهاتف: ${phone}` : ''}

الرسالة:
${message}

---
تم إرسال هذه الرسالة من نموذج التواصل في موقع الصناعية
    `;

    const { data, error } = await resend.emails.send({
      // Using your verified domain snaya.sa
      from: process.env.RESEND_FROM_EMAIL || 'الصناعية <noreply@snaya.sa>',
      to: ['Info@snaya.sa'],
      subject: `رسالة جديدة من ${name} - موقع الصناعية`,
      html: emailHtml,
      text: emailText,
      replyTo: email,
    });

    if (error) {
      console.error('Resend API error:', error);
      return NextResponse.json(
        { 
          error: error.message || 'حدث خطأ أثناء إرسال الرسالة. الرجاء المحاولة مرة أخرى لاحقاً.' 
        },
        { status: 500 }
      );
    }

    console.log('Email sent successfully. ID:', data?.id);

    return NextResponse.json(
      { 
        success: true, 
        message: 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.',
        id: data?.id 
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error sending email:', error);
    console.error('Error details:', JSON.stringify(error, null, 2));
    
    // Return more detailed error message
    const errorMessage = error?.message || 'حدث خطأ أثناء إرسال الرسالة. الرجاء المحاولة مرة أخرى لاحقاً.';
    
    return NextResponse.json(
      { 
        error: errorMessage,
        details: process.env.NODE_ENV === 'development' ? error?.stack : undefined
      },
      { status: 500 }
    );
  }
}

