export default function ContactForm() {
    return (
        <div id="form-container">
            <h1>&bull; Get In Touch &bull;</h1>

            <form action="#"
                method="post"
                id="contact-form">
                <div class="name">
                    <label for="name"></label>
                    <input
                        type="text"
                        placeholder="My Name is"
                        name="name"
                        id="name_input" required />
                </div>
                <div class="email">
                    <label for="email"></label>
                    <input
                        type="email"
                        placeholder="My e-mail is"
                        name="email"
                        id="email_input" required />
                </div>
                <div className="subject">
                    <label for="subject"></label>
                    <select
                        placeholder="Subject Line"
                        name="subject"
                        id="subject-input" required >
                        <option disabled hidden selected>Subject Line</option>
                        <option>I'd like to work with you</option>
                        <option>I'd like to ask a question</option>
                        <option>Just Saying Hi 😃</option>
                    </select>
                </div>
                <div class="message">
                    <label for="message"></label>
                    <textarea
                        name="message"
                        placeholder="I'd like to chat about"
                        id="message_input"
                        cols="30" rows="5"
                        required>
                    </textarea>
                </div>
                <div class="submit">
                    <input
                        type="submit"
                        value="Send Message"
                        id="form_button" />
                </div>
            </form>
        </div>
    );
};