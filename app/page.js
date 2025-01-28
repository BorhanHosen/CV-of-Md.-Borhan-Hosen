"use client";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Image from "next/image";
import { MyDocument } from "./components/generatePDF";
import { useEffect, useState } from "react";

const Home = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 to-purple-200 flex items-center justify-center py-10">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8 md:p-12 lg:p-16">
        {/* Download button */}
        {isClient ? (
          <div className="relative mb-6 flex justify-center">
            <button className="fixed mx-auto top-12 animate-bounce text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              <PDFDownloadLink
                document={<MyDocument />}
                fileName="CV of Md. Borhan Hosen.pdf"
              >
                Download CV
              </PDFDownloadLink>
            </button>
          </div>
        ) : (
          ""
        )}

        <div className="flex justify-center mb-6">
          <Image
            className="rounded-full bg-slate-800 border-4 border-blue-600 object-cover h-32 w-32 md:h-44 md:w-44 lg:h-56 lg:w-56"
            src="/borhan.png"
            alt="Borhan's profile picture"
            width={200}
            height={200}
          />
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-4 text-blue-900">
          Md. Borhan Hosen
        </h1>
        <p className="text-center text-gray-700 mb-6 text-lg md:text-xl italic">
          MERN Stack Developer
        </p>
        {/* Contact Information */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-blue-600">
            Contact Information
          </h2>
          <p>
            Email:{" "}
            <a
              href="mailto:borhanhosen3@gmail.com"
              className="text-blue-500 underline"
            >
              borhanhosen3@gmail.com
            </a>
          </p>
          <p>
            Phone: <span className="text-gray-700">+8801619460609</span>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/borhan-hosen"
              className="text-blue-500 underline"
            >
              linkedin.com/in/borhan-hosen
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/BorhanHosen"
              className="text-blue-500 underline"
            >
              github.com/BorhanHosen
            </a>
          </p>
        </div>
        {/* Objective */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-blue-600">
            Objective
          </h2>
          <p className="text-gray-600">
            Passionate and skilled MERN Stack Developer with experience in
            designing, developing, and maintaining web applications. Seeking to
            leverage expertise in JavaScript, React, Node.js, and MongoDB to
            contribute to a dynamic team.
          </p>
        </div>
        {/* Skills */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-blue-600">
            Skills
          </h2>
          <ul className="list-disc list-inside">
            <li>
              <span className="font-bold">Frontend:</span> React.js, Next.js,
              TypeScript, Redux, TailwindCSS, Bootstrap, HTML5, CSS3, JavaScript
            </li>
            <li>
              <span className="font-bold">Backend:</span> Node.js, Express.js,
              RESTful APIs
            </li>
            <li>
              <span className="font-bold">Database:</span> MongoDB, Mongoose,
              MySQL
            </li>
            <li>
              <span className="font-bold">Tools/Platforms:</span> Git, GitHub,
              Postman
            </li>
            <li>
              <span className="font-bold">Other Skills:</span> Problem-solving,
              Debugging Code
            </li>
          </ul>
        </div>
        {/* Experience */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-blue-600">
            Experience
          </h2>

          <h3 className="font-semibold text-lg">Front-end Developer</h3>
          <p>First Security Islami Bank PLC</p>
          <p>March 2024 – January 2025</p>
          <ul className="list-disc list-inside">
            <li>Developed three projects:</li>
            <ul className="list-disc list-inside ml-4">
              <li>
                <strong>Office Note Management System:</strong>
                <ul className="list-disc list-inside ml-4">
                  <li>User registration and login for secure access.</li>
                  <li>Drafting and submitting office notes for approval.</li>
                  <li>
                    Approval workflow for senior management to review and act on
                    notes.
                  </li>
                  <li>Forwarding notes to other departments as needed.</li>
                  <li>Returning notes for clarification with comments.</li>
                  <li>Status tracking for submitted notes.</li>
                  <li>
                    Centralized dashboard for managing office communications.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Billing Management System:</strong>
                <ul className="list-disc list-inside ml-4">
                  <li>
                    User registration and login for managing billing requests.
                  </li>
                  <li>
                    Submission of various billing requests, including allowances
                    and reimbursements.
                  </li>
                  <li>
                    Approval process for designated approvers to manage
                    requests.
                  </li>
                  <li>Expense tracking for submitted requests.</li>
                  <li>Notifications regarding request statuses.</li>
                  <li>
                    Admin dashboard for user management and billing analysis.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Form Requisition Management System:</strong>
                <ul className="list-disc list-inside ml-4">
                  <li>
                    User registration and login for requisition submissions.
                  </li>
                  <li>
                    Submission of requests for IT resources like domain IDs and
                    email addresses.
                  </li>
                  <li>Status tracking for requisitions.</li>
                  <li>Approval workflow for relevant authorities.</li>
                  <li>Automated notifications about requisition statuses.</li>
                  <li>Centralized dashboard for managing requisitions.</li>
                </ul>
              </li>
            </ul>
            <li>
              Collaborated with backend developers to integrate APIs and improve
              application performance.
            </li>
            <li>Ensured responsive design and cross-browser compatibility.</li>
          </ul>
        </div>

        {/* Personal Projects */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-blue-600">
            Personal Projects
          </h2>

          <h3 className="font-semibold">
            Blog Website Like WordPress Using MERN
          </h3>
          <p>
            <strong>The tasks I have done in this project are:</strong>
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Register and Login User</li>
            <li>Update User&aposs Profile Picture</li>
            <li>Create Post, Read Post, Update Post, Delete Post</li>
            <li>Manage Post By Author</li>
            <li>All Post by Single User</li>
            <li>All Post by All User</li>
            <li>Pagination, Search Post</li>
            <li>Implement Text Editor using CKEditor5</li>
            <li>Home Page, About Page, Landing Page</li>
          </ul>
          <a
            href="https://www.facebook.com/100007293582127/videos/958260885429127/"
            className="text-blue-500 underline mb-4 ml-8"
          >
            Click Here To View The Project
          </a>
          <h3 className="font-semibold mt-4">
            Full Authentication System Using MERN
          </h3>
          <p>
            <strong>The tasks I have done in this project are:</strong>
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Register and Login User</li>
            <li>Reset Password</li>
            <li>Send Email</li>
            <li>Change Password</li>
          </ul>

          <h3 className="font-semibold mt-4">
            Next AUTH with MongoDB (Mongoose)
          </h3>
          <p>
            <strong>The tasks I have done in this project are:</strong>
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Sign In with OAuth (Google)</li>
            <li>Sign In with Credentials (Email, Password)</li>
            <li>Sign Up with Name, Email, Password</li>
            <li>Verify Email</li>
            <li>Update Profile</li>
            <li>Change Password</li>
            <li>Forgot Password</li>
            <li>Middleware to secure certain pages</li>
          </ul>
          <a
            href="https://next-auth-full-setup.vercel.app/"
            className="text-blue-500 underline ml-8"
          >
            Click Here To View The Project
          </a>
        </div>
        {/* Education */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-blue-600">
            Education
          </h2>
          <p>
            <strong>Computer Science & Engineering</strong>
          </p>
          <p>BGC Trust University Bangladesh</p>
          <p>07/2018 - 06/2022, CGPA 3.48 Out Of 4.00</p>

          <p>
            <strong>Higher Secondary School Certificate</strong>
          </p>
          <p>BGC Academy School & College</p>
          <p>01/2015 - 06/2020, GPA 3.17 Out Of 5.00</p>

          <p>
            <strong>Secondary School Certificate</strong>
          </p>
          <p>Abdus Sobhan Rahat Ali High School</p>
          <p>01/2010 - 02/2015</p>
        </div>
        {/* Languages */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-blue-600">
            Languages
          </h2>
          <ul className="list-disc list-inside">
            <li>
              <strong>Bengali</strong>
            </li>
            <li>
              <strong>English</strong>
            </li>
          </ul>
        </div>
        {/* References */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-blue-600">
            References
          </h2>
          <ul className="list-disc list-inside">
            <li>
              <strong>Md. Ishak</strong>
              <br />
              Principal Officer, In-Charge of Software Team
              <br />
              ICT Division, First Security Islami Bank PLC
              <br />
              Bashundhara R/A, Dhaka
              <br />
              Phone No: <span className="text-gray-700">01715144817</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
