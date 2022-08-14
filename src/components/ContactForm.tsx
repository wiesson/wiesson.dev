const ContactForm = () => {
  return (
    <form action="/api/v1/contact" method="post" class="space-y-4">
      <div class="form-fieldset">
        <label class="form-label" htmlFor="name">
          Name
        </label>
        <input
          class="form-item"
          type="text"
          name="name"
          id="name"
          required
        />
      </div>

      <div class="form-fieldset">
        <label class="form-label" htmlFor="phoneNumber">
          Telefonnumer
        </label>
        <input
          class="form-item"
          type="text"
          name="phoneNumber"
          id="phoneNumber"
          required
        />
      </div>

      <div class="form-fieldset">
        <label class="form-label" htmlFor="email">
          Email
        </label>
        <input
          class="form-item"
          type="email"
          name="email"
          id="email"
          required
        />
      </div>

      <div class="form-fieldset">
        <label class="form-label" htmlFor="name">
          Name
        </label>
        <input class="form-item" type="text" name="name" id="name" />
      </div>

      <div class="form-fieldset">
        <label class="form-label" htmlFor="duration">
          Projektdauer
        </label>
        <select class="form-item" name="duration" id="duration">
          <option value="">Bitte wählen</option>
          <option value="2w">2 Wochen</option>
          <option value="1m">1 Monat</option>
          <option value="3m">3 Monate</option>
          <option value="6m">6 Monate</option>
        </select>
      </div>

      <div class="form-fieldset">
        <label class="form-label" htmlFor="duration">
          Projektbudget
        </label>
        <select class="form-item" name="budget" id="budget">
          <option value="">Bitte wählen</option>
          <option value="<10800">{"<"} 10.000 EUR</option>
          <option value="10000">10.000 EUR</option>
          <option value="20000">20.000 EUR</option>
          <option value="60000">60.000 EUR</option>
          <option value="100000">100.000 EUR</option>
          <option value="20000">200.000 EUR</option>
          <option value=">200000">{">"} 200.000 EUR</option>
        </select>
      </div>

      <div class="form-fieldset">
        <label class="form-label" htmlFor="topic">
          Themengebiet
        </label>
        <select class="form-item" name="topic" id="topic">
          <option value="development">Entwicklung</option>
          <option value="support">Unterstützung</option>
          <option value="mvp">MVP Entwicklung</option>
          <option value="misc">Sonstiges</option>
        </select>
      </div>

      <div class="form-fieldset">
        <label class="form-label" htmlFor="message">
          Nachricht
        </label>
        <textarea
          class="form-item"
          name="message"
          id="message"
          rows={10}
        ></textarea>
      </div>

      <button>Anfragen absenden</button>
    </form>
  );
};

export default ContactForm;
