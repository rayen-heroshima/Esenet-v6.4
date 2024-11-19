import { NextRequest, NextResponse } from 'next/server';
import { prisma } from "@/lib/prisma";
import nodemailer from 'nodemailer';
import { google } from "googleapis"



// Nodemailer configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_SERVER,
  port: Number(process.env.SMTP_PORT),
  
  auth: {
    user: process.env.FROM_EMAIL_GMAIL,
    pass: process.env.FROM_EMAIL_PASSWORD,
  },
});


// Named export for POST method
export async function POST(req: NextRequest) {
  
  const body = await req.json();
  const { nom, prenom, email, Tele, vous, faculte, organisme, recherche, source } = body;

  try {
    // Create user in the database
    const registration = await prisma.registration.create({
      data: {
        nom,
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

    // HTML Content for Email based on role
    let htmlContent = '';

    if (vous === "etudiant" || vous === "Enseignant") {
      // For Etudiant or Enseignant
      htmlContent = `
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
        </div>`;
    } else {
      // For Companies
      htmlContent = `
        <div style="font-family: 'Arial', sans-serif; padding: 20px; background-color: #f4f7fa; text-align: center; color: #333;">
          <h1 style="font-size: 30px; color: #004b6d;">Merci de rejoindre l'ESENET Job Fair 2024 !</h1>
          <div style="background-color: #fff; border-radius: 10px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); padding: 30px; max-width: 600px; margin: 0 auto;">
            <p style="font-size: 18px; line-height: 1.6; color: #444;">Bonjour <strong>${organisme},</strong></p>
            <p style="font-size: 18px; color: #555;">Nous sommes ravis de vous confirmer votre participation à l'<strong>ESENET Job Fair 2024</strong>. Cet événement sera une opportunité exceptionnelle pour établir des connexions significatives et promouvoir votre entreprise auprès de jeunes talents et professionnels.</p>
            <div style="margin-top: 30px; padding: 20px; background-color: #004b6d; color: white; border-radius: 5px;">
              <p style="font-size: 18px; margin-bottom: 10px;">Détails de l'événement :</p>
              <ul style="list-style: none; padding: 0;">
                <li><strong>Date de l'événement :</strong> 27 novembre 2024</li>
                <li><strong>Lieu :</strong> ESEN Manouba</li>
                <li><strong>Heure :</strong> 8h30</li>
              </ul>
            </div>
            <p style="margin-top: 20px; font-size: 16px;">Pour garantir le bon déroulement de votre participation, nous vous prions de prendre note des points suivants :</p>
            <ul style="text-align: left; color: #555; font-size: 16px; padding-left: 20px;">
              <li>Arrivée et installation de votre stand avant 8h00.</li>
              <li>Un point de contact vous accueillera à votre arrivée pour toute assistance logistique.</li>
              <li>Merci de préparer tout matériel promotionnel ou équipement nécessaire à votre stand.</li>
            </ul>
            <p style="margin-top: 20px; font-size: 16px;">Pour toute question ou demande particulière, n'hésitez pas à nous contacter à l'adresse <a href="mailto:contact@esenet.tn" style="color: #004b6d; text-decoration: none;">contact@esenet.tn</a>.</p>
            <p style="margin-top: 20px; font-size: 16px;">Nous sommes impatients de vous accueillir et de faire de cet événement un succès retentissant !</p>
            <p style="margin-top: 20px; font-size: 16px;">Cordialement,<br>L'équipe ESENET</p>
          </div>
          <footer style="margin-top: 30px; font-size: 14px; color: #aaa;">
            <p>&copy; 2024 ESENET Job Fair. Tous droits réservés.</p>
          </footer>
        </div>`;
    }

    // Send email with the respective HTML content
    const mailOptions = {
      from: "embassadorsesen@gmail.com",
      to: email,
      subject: vous === "etudiant" || vous === "Enseignant" ? "ESENET Job Fair 2024 - Confirmation de votre inscription" : "ESENET Job Fair 2024 - Confirmation de votre participation",
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);

    // Handle Google Sheets data append
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

    const range = vous === "etudiant" || vous === "Enseignant" ? 'A1:I1' : 'A1:I1'; // Same range for both
    const spreadsheetId = vous === "etudiant" || vous === "Enseignant" ? process.env.GOOGLE_SHEET_ID : process.env.GOOGLE_SHEET_ID1;

    // Append data to Google Sheets
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [registration.id, nom, prenom, email, Tele, vous, faculte, recherche, source],
        ],
      },
    });

    return NextResponse.json({ message: 'Inscription réussie et email envoyé !', registration });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Une erreur s\'est produite. Veuillez réessayer.' });
  }
}
