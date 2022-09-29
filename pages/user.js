import styles from './../styles/User.module.css'
export default function User() {

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      first_name: event.target.first_name.value,
      last_name:  event.target.last_name.value,
      email:  event.target.email.value,
      phone:  event.target.phone.value
    }

    const JSONdata  = JSON.stringify(data);
    const endpoint = 'http://localhost:3001/api/v1/create/user';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      },
      body:JSONdata 
    }

    const res = await fetch(endpoint, options);
    const result = await res.json();
    return alert(`${result.message}`);
  }
  return (
    <div>
      <div>
        <h3>Novo Cliente</h3>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <ul className={styles.flex_outer}>
            <li>
              <label for="first-name">First Name</label>
              <input type="text" id="first_name"
                placeholder="Enter your first name here"
                name="first_name" required />
            </li>
            <li>
              <label for="last-name">Last Name</label>
              <input type="text" id="last_name"
                placeholder="Enter your last name here"
                name="last_name" required />
            </li>
            <li>
              <label for="email">Email</label>
              <input type="email" id="email"
                placeholder="Enter your email here"
                name="email" required />
            </li>
            <li>
              <label for="phone">Phone</label>
              <input type="tel" id="phone"
                placeholder="Enter your phone here"
                name="phone" required />
            </li>
            <li>
              <button type="submit">Submit</button>
              <button type='reset'>Reset</button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  )
}

