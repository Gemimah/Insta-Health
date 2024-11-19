import "bootstrap/dist/css/bootstrap.min.css";



interface Feature {
  imgSrc: string;
  title: string;
  description: string;
}



const features: Feature[] = [
  {
    imgSrc: "/aud-removebg-preview 1.png",
    title: "Video Call",
    description: "Schedule easily your video call with doctors."
  },
  {
    imgSrc: "/bbok 1.jpg",
    title: "Appointment Booking",
    description: "Talk with different specialists and doctors about your health."
  },
  {
    imgSrc: "/aud-removebg-preview 1.png",
    title: "Audio Call",
    description: "Option for voice-only consultations."
  },
  {
    imgSrc: "/aud-removebg-preview 1.png",
    title: "Messaging",
    description: "In-app messaging for quick communication with healthcare providers."
  }
];

export { features };

