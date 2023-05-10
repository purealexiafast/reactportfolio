function ContactForm(props) {


    return (
        <div>
            <h2>{props.contact}</h2>

            <form>
                <div class="form">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" />
                </div>

                <div class="form">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" />
                </div>

                <div class="form">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" />
                </div>
                <div class="form">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default ContactForm;