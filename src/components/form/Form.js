

const Form = ({message,setBirthDate,handleSubmit,setFio,fio,birthDate})=>{
  
  return(
   <>
    <form className="home-page__form" onSubmit={handleSubmit}> 
        <label className="home-page__label"> 
          ФИО ребенка:
          <input
            className="home-page__input" 
            type="text"
            value={fio}
            onChange={(e) => setFio(e.target.value)}
            required
          />
        </label>
        <br />
        <label className="home-page__label">
          Дата рождения:
          <input
            className="home-page__input"
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            required
          />
        </label>
        <br />
        <button className="home-page__submit-button" type="submit"> 
         Записаться
        </button>
      </form>
      {message && <p className="home-page__message">{message}</p>} 
   </>
  )
}

export default Form;