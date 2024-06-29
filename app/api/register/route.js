
import connectToDatabase from "@/lib/db2";
import Student from "@/models/Student";
import { promises as fs } from 'fs';
import { join } from 'path';
import { v4 as uuidv4 } from 'uuid';

export async function POST(req) {
  try {
    const formData = await req.formData();
    const studentData = {};

    formData.forEach((value, key) => {
      if (key !== 'photo') {
        studentData[key] = value;
      }
    });

    const photoFile = formData.get('photo');
    const photoExt = photoFile.name.split('.').pop();
    const photoFileName = `${uuidv4()}.${photoExt}`;
    const photoPath = join(process.cwd(), 'tmp/uploads', photoFileName);
    const photoBuffer = await photoFile.arrayBuffer();

    await fs.writeFile(photoPath, Buffer.from(photoBuffer));
    studentData.photo = `/uploads/${photoFileName}`;

    await connectToDatabase();
    const newStudent = new Student(studentData);
    await newStudent.save();

    return new Response(JSON.stringify({ message: 'Student registered successfully!' }), { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Error registering student' }), { status: 500 });
  }
}
