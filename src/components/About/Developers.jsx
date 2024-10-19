import { FaLinkedin, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

function Developers() {
  return (
    <div className="developers mb-[10%]">
      <h1 className="text-center font-extrabold mb-[30px] text-[40px] text-[#db4444]">
        Our Developers
      </h1>

      <div className="devs grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%] mx-auto">
        {/* Developer 1 */}
        <div className="item mb-12">
          <img className="w-full h-auto object-cover" src="../../../public/abdelmoneim.jpg" alt="Abdelmoneim Ramadan" />
          <div className="content text-center mt-4">
            <h1 className="text-[25px] font-bold">Abdelmoneim Ramadan</h1>
            <p className="text-[20px]">Front-End Developer</p>
            <div className="links flex justify-center gap-4 text-[25px] mt-4">
              <a href="#"><FaLinkedin /></a>
              <a href="#"><FaInstagramSquare /></a>
              <a href="#"><FaTwitterSquare /></a>
            </div>
          </div>
        </div>

        {/* Developer 2 */}
        <div className="item mb-12">
          <img className="w-full h-[65%] object-cover" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTERMSExIVEBURFRAVEhIXExUQFRgVFRUYFhUVFRUYHSggGBolGxYXITEjJSkrLy4xGB8zOD8uNygtLi4BCgoKDg0OGxAQGi0fHSUvKy0tLTcrLS0tLS01LTctLS0tKystLy0tNS0tKy8tLTctMS8wKzAtKysrLSstKystLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABAYDBQcCCAH/xABGEAACAgECAwMIBwYDBQkAAAABAgADEQQhBRIxBkFRBxMUImFxgZEyUmKSobHRQlRylMHSFiNzFTOTsvAXJFODhLPC4fH/xAAaAQEBAQEBAQEAAAAAAAAAAAAAAQIDBAUG/8QALREBAQACAQMCAwYHAAAAAAAAAAECEQMSITEEEyJhgTJBkcHh8AVCUVJxobH/2gAMAwEAAhEDEQA/AO4xEQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQETHZcq4yQM9B3/KekcEZBBB7xvA9REQEREBERAREQEREBNfbqUWsW3WilGxglxUoDfRBY9/xmwmm4lwmrU6Y6e9SRXy9GZDzVgFHVlIPgYHn/bei/fqf5pP7pL0mpqtz5nULYVwTy2LcN+nMAenynINCgu0+kDnl9IOiW11HK2LCgcqRuCQT038Jg7J8Ypo1OmYD1KHtoN9NbstymlsLjlBUuwV+Vv8AwyemCdWPVyemmHbq76l8O3Jq16OVRhsylh8xnqJ79JTGedfvCVA+UWrnZBpNUWCqyjkrHMCSM83nMLjH7RBPdmev+0CjHq6bUNcNnp5EBUdxa0t5sg52wxPXbYyacfZ5P7b+C2tqF5SwIYDwOfh75B4jraqEFmquWkE4GX82uT0VehY/oekwcF4nTrUNiK1b1uFsRgFdWHK4VsEhgQQRgkb+MqPlP1oXU6fkV7rqq7D5gKwBruZR5xbCOQMDURgnofdkYYbzmN7fT8l5o1ClFuqsFtTANkN5xSv1kbvkkapPrr94TmfYbthVRp7KWova5brnspRUK1mw8wUOzhcYOc53JY4E3Wj8pWmt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" alt="Elsayed Rady" />
          <div className="content text-center mt-4">
            <h1 className="text-[25px] font-bold">Elsayed Rady</h1>
            <p className="text-[20px]">Front-End Developer</p>
            <div className="links flex justify-center gap-4 text-[25px] mt-4">
              <a href="#"><FaLinkedin /></a>
              <a href="#"><FaInstagramSquare /></a>
              <a href="#"><FaTwitterSquare /></a>
            </div>
          </div>
        </div>

        {/* Developer 3 */}
        <div className="item mb-12">
          <img className="w-full h-[65%] object-cover" src="../../../public/ahmed.jpg" alt="Ahmed Hossam" />
          <div className="content text-center mt-4">
            <h1 className="text-[25px] font-bold">Ahmed Hossam</h1>
            <p className="text-[20px]">Back-End Developer</p>
            <div className="links flex justify-center gap-4 text-[25px] mt-4">
              <a href="#"><FaLinkedin /></a>
              <a href="#"><FaInstagramSquare /></a>
              <a href="#"><FaTwitterSquare /></a>
            </div>
          </div>
        </div>

        {/* Developer 4 */}
        <div className="item mb-12">
          <img className="w-full h-[65%] object-cover " src="../../../public/hazem.jpg" alt="Hazem Mohamed" />
          <div className="content text-center mt-4">
            <h1 className="text-[25px] font-bold">Hazem Mohamed</h1>
            <p className="text-[20px]">Front-End Developer</p>
            <div className="links flex justify-center gap-4 text-[25px] mt-4">
              <a href="#"><FaLinkedin /></a>
              <a href="#"><FaInstagramSquare /></a>
              <a href="#"><FaTwitterSquare /></a>
            </div>
          </div>
        </div>

        {/* Developer 5 */}
        <div className="item mb-12">
          <img className="w-full h-auto object-cover" src="https://via.placeholder.com/150" alt="Mohamed Magdy" />
          <div className="content text-center mt-4">
            <h1 className="text-[25px] font-bold">Mohamed Magdy</h1>
            <p className="text-[20px]">Back-End Developer</p>
            <div className="links flex justify-center gap-4 text-[25px] mt-4">
              <a href="#"><FaLinkedin /></a>
              <a href="#"><FaInstagramSquare /></a>
              <a href="#"><FaTwitterSquare /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Developers;
