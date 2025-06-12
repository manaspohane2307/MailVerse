import { Document, Packer, Paragraph } from "docx";
import {saveAs} from "file-saver"

export async function exportEmailToDocx(content: string, fileName = "email.docx") {
  const doc = new Document({
    sections: [
      {
        children: [new Paragraph(content)],
      },
    ],
  });

  const blob = await Packer.toBlob(doc);
  saveAs(blob, fileName);
}
