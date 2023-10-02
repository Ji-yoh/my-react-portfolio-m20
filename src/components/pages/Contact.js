// need to render the contact form, email input field needs to take valid email addresses

function Contact() {
    return (
        <div className="contact">
            <h2>Contact Me</h2>
            <form>
                <input type="text" id="name" placeholder="Name" required></input>
                <input type="email" id="email" placeholder="Email" required></input>
                <textarea id="message" placeholder="Message" required></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default Contact;