import { NextRequest, NextResponse } from 'next/server';
import { prisma } from "@/lib/prisma";
import nodemailer from 'nodemailer';
import {google} from "googleapis"

// Disable static generation for this route
export const dynamic = 'force-dynamic';

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_SERVER,
  port: Number(process.env.SMTP_PORT),
  secure: false, // false for non-SSL/TLS
  auth: {
    user: process.env.FROM_EMAIL_GMAIL,
    pass: process.env.FROM_EMAIL_PASSWORD,
  },
});


// Named export for POST method
export async function POST(req: NextRequest) {
  
  const body = await req.json();
  const { nom , prenom, email, Tele, vous , faculte , organisme , recherche, source } = body;

  try {
    // Create user in the database
    const registration = await prisma.registration.create({
      data: {
      nom ,
      prenom,
      email,
      Tele,
      vous,
      faculte,
      organisme,
      recherche,
      source,
      },
    });

    // Send verification email with user's ID
const mailOptions = {
  from: process.env.FROM_EMAIL_GMAIL,
  to: email,
  subject: "ESENET Job Fair 2024 - Confirmation de votre inscription",
  html: `
    <div style="font-family: 'Arial', sans-serif; padding: 20px; background-color: #f4f7fa; text-align: center; color: #333;">
      <h1 style="font-size: 30px; color: #004b6d;">Bienvenue à l'ESENET Job Fair 2024 !</h1>
      
      <div style="background-color: #fff; border-radius: 10px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); padding: 30px; max-width: 600px; margin: 0 auto;">
        <p style="font-size: 18px; line-height: 1.6; color: #444;">Bonjour <strong>${nom} ${prenom},</strong></p>
        
        <p style="font-size: 18px; color: #555;">Merci de vous être inscrit à l'<strong>ESENET Job Fair 2024</strong>. Nous sommes ravis de vous avoir parmi nous !</p>
        
        <p style="font-size: 16px; color: #777;">Votre code d'inscription est : <strong>${registration.id}</strong></p>
        
        <div style="margin-top: 30px; padding: 20px; background-color: #004b6d; color: white; border-radius: 5px;">
          <p style="font-size: 18px; margin-bottom: 10px;">Détails de l'événement :</p>
          <ul style="list-style: none; padding: 0;">
            <li><strong>Date de l'événement :</strong> 27 novembre 2024</li>
            <li><strong>Lieu :</strong> ESEN Manouba</li>
            <li><strong>Heure :</strong> 8h30</li>
          </ul>
        </div>

        <p style="margin-top: 20px; font-size: 16px;">Nous avons hâte de vous voir à l'événement et espérons que vous vivrez une expérience enrichissante en rencontrant des employeurs et des pairs !</p>
        
        <p style="margin-top: 20px; font-size: 16px;">Si vous avez des questions, n'hésitez pas à répondre à ce courriel. <br> Cordialement,<br> L'équipe ESENET</p>
      </div>
      
      <footer style="margin-top: 30px; font-size: 14px; color: #aaa;">
        <p>&copy; 2024 ESENET Job Fair. Tous droits réservés.</p>
      </footer>
    </div>
  `,
};



    await transporter.sendMail(mailOptions);

    // Fetch all registrations for the Excel report
    //const allRegistrations = await prisma.registration.findMany();
    if (vous ==="etudiant" || vous ==="Enseignant" ) {
      const auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: process.env.GOOGLE_CLIENT_EMAIL,
          private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/, '\n'),
        },
        scopes: [
          'https://www.googleapis.com/auth/drive',
          'https://www.googleapis.com/auth/drive.file',
          'https://www.googleapis.com/auth/spreadsheets',
        ],
      });

      const sheets = google.sheets({ auth, version: 'v4' });

      // Append data to Google Sheets
      const response = await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range: 'A1:I1',
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [
            [registration.id, nom, prenom, email, Tele, vous, faculte, recherche, source],
          ],
        },
      });


    } else{
      const auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: process.env.GOOGLE_CLIENT_EMAIL,
          private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/, '\n'),
        },
        scopes: [
          'https://www.googleapis.com/auth/drive',
          'https://www.googleapis.com/auth/drive.file',
          'https://www.googleapis.com/auth/spreadsheets',
        ],
      });

      const sheets = google.sheets({ auth, version: 'v4' });

      // Append data to Google Sheets
      const response = await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEET_ID1,
        range: 'A1:I1',
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [
            [registration.id, nom, prenom, email, Tele, vous, organisme, recherche, source],
          ],
        },
      });
      
    }
    return NextResponse.json({ message: 'User registered and emails sent successfully.' });
  } catch (error) {
    console.error('Error during registration:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}