"use client";
import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
  Font,
  Link,
  PDFViewer,
} from "@react-pdf/renderer";

// Register the Roboto font
Font.register({
  family: "Roboto",
  fonts: [
    { src: "/Roboto-Medium.ttf", fontStyle: "medium" },
    { src: "/Roboto-Bold.ttf", fontStyle: "bold" },
    { src: "/Roboto-Black.ttf", fontStyle: "black" },
    { src: "/Roboto-Italic.ttf", fontStyle: "italic" },
  ],
});

// Create styles for the PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    paddingVertical: 30,
    paddingHorizontal: 40,
    backgroundColor: "#ffffff",
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  section: {
    marginBottom: 10,
  },
  title: {
    fontFamily: "Roboto",
    fontStyle: "medium",
    fontSize: 24,
    marginBottom: 10,
    textAlign: "center",
  },
  designation: {
    fontFamily: "Roboto",
    fontStyle: "italic",
    fontSize: 12,
    textAlign: "center",
  },
  subtitle: {
    fontFamily: "Roboto",
    fontStyle: "bold",
    fontSize: 18,
    marginBottom: 5,
    color: "#4A90E2",
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
  textBold: {
    fontFamily: "Roboto",
    fontStyle: "bold",
    fontSize: 12,
    marginBottom: 5,
  },
  span: {
    fontFamily: "Roboto",
    fontStyle: "bold",
  },
  image: {
    width: "100%",
    height: "100%",
    backgroundColor: "#1E293B",
    borderRadius: "50%",
    marginBottom: 10,
    margin: "auto",
  },
  imageSection: {
    width: 150,
    height: 150,
    margin: "auto",
    borderRadius: "50%",
    border: "4px solid #4A90E2",
  },
  listInside: {
    paddingLeft: 10,
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

// Create the PDF documenta
export const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.header} fixed>
        ~ CV of Md. Borhan Hosen ~
      </Text>
      <View style={styles.imageSection}>
        <Image src="/borhan.png" style={styles.image} />
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Md. Borhan Hosen</Text>
        <Text style={styles.designation}>MERN Stack Developer</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subtitle}>Contact Information</Text>
        <Text style={styles.text}>
          Email:{" "}
          <Link src="https://mail.google.com/mail/?view=cm&fs=1&to=borhanhosen3@gmail.com">
            borhanhosen3@gmail.com
          </Link>
        </Text>
        <Text style={styles.text}>Phone: +8801619460609</Text>
        <Text style={styles.text}>
          LinkedIn:{" "}
          <Link src="www.linkedin.com/in/borhan-hosen">
            linkedin.com/in/borhan-hosen
          </Link>
        </Text>
        <Text style={styles.text}>
          GitHub:{" "}
          <Link src="www.github.com/BorhanHosen">github.com/BorhanHosen</Link>
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subtitle}>Objective</Text>
        <Text style={styles.text}>
          I'm a full stack web developer specializing in the MERN stack with
          three years of experience leading both front-end and back-end
          development, and performing quality assurance. Currently, I'm
          expanding my skill set by learning{" "}
          <Text style={styles.textBold}>TypeScript</Text> with a strong
          foundation in{" "}
          <Text style={styles.textBold}>
            MongoDB, Express.js, React.js, Node.js, Next.js, Redux, Tailwind CSS
            and Material UI.
          </Text>{" "}
          I'm passionate about building robust and user-friendly web
          applications. Collaboration and problem-solving drive me, and I thrive
          in team environments. I prioritize code quality and maintainability,
          ensuring clean, modular, and well-documented code. Exploring my GitHub
          repositories, you'll find projects reflecting my expertise and
          dedication to continuous learning. I'm always open to new
          opportunities and collaborations, so feel free to reach out.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subtitle}>Skills</Text>
        <Text style={styles.text}>
          <Text style={styles.span}>Frontend:</Text> React.js, Next.js,
          TypeScript, Redux, TailwindCSS, Bootstrap, HTML5, CSS3, JavaScript
        </Text>
        <Text style={styles.text}>
          <Text style={styles.span}>Backend:</Text> Node.js, Express.js, RESTful
          APIs
        </Text>
        <Text style={styles.text}>
          <Text style={styles.span}>Database:</Text> MongoDB, Mongoose, MySQL
        </Text>
        <Text style={styles.text}>
          <Text style={styles.span}>Tools/Platforms:</Text> Git, GitHub, Postman
        </Text>
        <Text style={styles.text}>
          <Text style={styles.span}>Other Skills:</Text> Problem-solving,
          Debugging Code
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Experience</Text>
        <Text style={styles.text}>Front-end Developer</Text>
        <Text style={styles.text}>First Security Islami Bank PLC</Text>
        <Text style={styles.text}>March 2024 – January 2025</Text>
        <View style={styles.listInside}>
          <Text style={styles.textBold}>• Developed three projects:</Text>
          <View style={styles.listInside}>
            <Text style={styles.textBold}>• Office Note Management System</Text>
            <View style={styles.listInside}>
              <Text style={styles.text}>
                • User registration and login for secure access.{" "}
              </Text>
              <Text style={styles.text}>
                • Drafting and submitting office notes for approval.{" "}
              </Text>
              <Text style={styles.text}>
                • Approval workflow for senior management to review and act on
                notes.{" "}
              </Text>
              <Text style={styles.text}>
                • Forwarding notes to other departments as needed.{" "}
              </Text>
              <Text style={styles.text}>
                • Returning notes for clarification with comments.{" "}
              </Text>
              <Text style={styles.text}>
                • Status tracking for submitted notes.{" "}
              </Text>
              <Text style={styles.text}>
                • Centralized dashboard for managing office communications.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.listInside}>
          <View style={styles.listInside}>
            <Text style={styles.textBold}>• Billing Management System</Text>
            <View style={styles.listInside}>
              <Text style={styles.text}>
                • User registration and login for managing billing requests.
              </Text>
              <Text style={styles.text}>
                • Drafting and submitting office notes for approval.{" "}
              </Text>
              <Text style={styles.text}>
                • Submission of various billing requests, including allowances
                and reimbursements.
              </Text>
              <Text style={styles.text}>
                • Approval process for designated approvers to manage requests.
              </Text>
              <Text style={styles.text}>
                • Notifications regarding request statuses.
              </Text>
              <Text style={styles.text}>
                • Admin dashboard for user management and billing analysis.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.listInside}>
          <View style={styles.listInside}>
            <Text style={styles.textBold}>
              • Form Requisition Management System:
            </Text>
            <View style={styles.listInside}>
              <Text style={styles.text}>
                • User registration and login for requisition submissions.
              </Text>
              <Text style={styles.text}>
                • Submission of requests for IT resources like domain IDs and
                email addresses.
              </Text>
              <Text style={styles.text}>
                • Status tracking for requisitions.
              </Text>
              <Text style={styles.text}>
                • Approval workflow for relevant authorities.
              </Text>
              <Text style={styles.text}>
                • Automated notifications about requisition statuses.
              </Text>
              <Text style={styles.text}>
                • Centralized dashboard for managing requisitions.
              </Text>
            </View>
          </View>
          <Text style={styles.text}>
            • Collaborated with backend developers to integrate APIs and improve
            application performance.
          </Text>
          <Text style={styles.text}>
            • Ensured responsive design and cross-browser compatibility.
          </Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.subtitle}>Personal Projects</Text>
        <Text style={styles.textBold}>
          Blog Website Like WordPress Using MERN
        </Text>
        <View style={styles.listInside}>
          <Text style={styles.textBold}>
            • The tasks I have done in this project are:
          </Text>
          <View style={styles.listInside}>
            <View style={styles.listInside}>
              <Text style={styles.text}>• Register and Login User</Text>
              <Text style={styles.text}>
                • Create Post, Read Post, Update Post, Delete Post
              </Text>
              <Text style={styles.text}>• Manage Post By Author</Text>
              <Text style={styles.text}>• Manage All Post by Single User</Text>
              <Text style={styles.text}>• View All Post by All User</Text>
              <Text style={styles.text}>• Pagination, Search Post</Text>
              <Text style={styles.text}>
                • Implement Text Editor using CKEditor5
              </Text>
              <Text style={styles.text}>
                • Home Page, About Page, Landing Page
              </Text>
            </View>
          </View>
        </View>
        <Text style={styles.textBold}>
          Full Authentication System Using MERN
        </Text>
        <View style={styles.listInside}>
          <Text style={styles.textBold}>
            • The tasks I have done in this project are:
          </Text>
          <View style={styles.listInside}>
            <View style={styles.listInside}>
              <Text style={styles.text}>• Register and Login User</Text>
              <Text style={styles.text}>• Reset Password </Text>
              <Text style={styles.text}>• Send Email</Text>
              <Text style={styles.text}>• Change Password</Text>
            </View>
          </View>
        </View>
        <Text style={styles.textBold}>Next AUTH with MongoDB (Mongoose)</Text>
        <View style={styles.listInside}>
          <Text style={styles.textBold}>
            • The tasks I have done in this project are:
          </Text>
          <View style={styles.listInside}>
            <View style={styles.listInside}>
              <Text style={styles.text}>• Sign In with OAuth (Google) </Text>
              <Text style={styles.text}>
                • Sign In with Credentials (Email, Password)
              </Text>
              <Text style={styles.text}>
                • Sign Up with Name, Email, Password
              </Text>
              <Text style={styles.text}>• Verify Email </Text>
              <Text style={styles.text}>• Update Profile </Text>
              <Text style={styles.text}>• Change Password </Text>
              <Text style={styles.text}>• Forgot Password </Text>
              <Text style={styles.text}>
                • Middleware to secure certain pages
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.subtitle}>Education</Text>
        <Text style={styles.textBold}>Computer Science & Engineering</Text>
        <Text style={styles.text}>BGC Trust University Bangladesh</Text>
        <Text style={styles.text}>
          Passing Year: 2022, CGPA 3.48 Out Of 4.00
        </Text>
        <Text style={styles.textBold}>Higher Secondary School Certificate</Text>
        <Text style={styles.text}>BGC Academy School & College</Text>
        <Text style={styles.text}>
          Passing Year: 2017, GPA 3.17 Out Of 5.00
        </Text>
        <Text style={styles.textBold}>Secondary School Certificate</Text>
        <Text style={styles.text}>Abdus Sobhan Rahat Ali High School</Text>
        <Text style={styles.text}>
          Passing Year: 2015, GPA 4.56 Out Of 5.00
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subtitle}>Languages</Text>
        <Text style={styles.text}>Bengali</Text>
        <Text style={styles.text}>English</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subtitle}>References</Text>
        <Text style={styles.textBold}>Md. Ishak</Text>
        <Text style={styles.text}>
          Principal Officer, In-Charge of Software Team
        </Text>
        <Text style={styles.text}>
          ICT Division, First Security Islami Bank PLC
        </Text>
        <Text style={styles.text}>Bashundhara R/A, Dhaka</Text>
        <Text style={styles.text}>Phone No: 01715144817</Text>
      </View>
      <Text
        style={styles.pageNumber}
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
        fixed
      />
    </Page>
  </Document>
);

const Home = () => {
  return (
    <PDFViewer className="w-full h-screen">
      <MyDocument />
    </PDFViewer>
  );
};

export default Home;
