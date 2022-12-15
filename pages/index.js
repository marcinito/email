import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {

  async function handleOnSubmit(e) {
    e.preventDefault();
  
    const formData = {};
  
    Array.from(e.currentTarget.elements).forEach(field => {
      if ( !field.name ) return;
      formData[field.name] = field.value;
    });
  
    await fetch('/api/mail', {
      method: 'POST',
      body: JSON.stringify(formData)
    });
  }
  return (
   <div className={styles.grid}>
  <style jsx>{`
    form {
      font-size: 1.2em;
    }

    label {
      display: block;
      margin-bottom: .2em;
    }

    input,
    textarea {
      width: 100%;
      padding: .8em;
    }

    button {
      color: white;
      font-size: 1em;
      background-color: blueviolet;
      padding: .8em 1em;
      border: none;
      border-radius: .2em;
    }
  `}</style>
  <form method="post">
    <p>
      <label htmlFor="name">Name</label>
      <input id="name" type="text" name="name" />
    </p>
    <p>
      <label htmlFor="email">Email</label>
      <input id="email" type="text" name="email" />
    </p>
    <p>
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" />
    </p>
    <p>
      <button onSubmit={handleOnSubmit}>Submit</button>
    </p>
  </form>
</div>
  )
}
