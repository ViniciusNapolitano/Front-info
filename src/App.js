import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios';


export default class App extends React.Component {

  state = {
    resGet: [],
    resGetExperience: [],
    resGetCandidates: [],

    idDelete: '',
    idDeleteExperiencia: '',

    idPutCandidates: '',
    idPutExperience: '',

    name: '',
    surname: '',
    birthday: '',
    email: '',

    company: '',
    job: '',
    description: '',
    salary: '',
    beginDate: '',
    endDate: '',
    candidatesId: ''
  }

  componentDidMount() {
    axios.get('https://api-infojobs.herokuapp.com/api/v1/candidates')
      .then(res => {
        const resGet = res.data;
        this.setState({ resGetCandidates: resGet });
        console.log(res.data)
      })
  }

  selectCandidates() {
    return this.state.resGetCandidates.map(
      candidato => <option key={candidato.id} value={candidato.id}>{candidato.name}</option>
    )
  }

  handleChangeName = event => {
    this.setState({ name: event.target.value });
  }

  handleChangeSurname = event => {
    this.setState({ surname: event.target.value });
  }

  handleChangeEmail = event => {
    this.setState({ email: event.target.value });
  }

  handleChangeBirthday = event => {
    this.setState({ birthday: event.target.value });
  }

  handleChangeCompany = event => {
    this.setState({ company: event.target.value });
  }

  handleChangeJob = event => {
    this.setState({ job: event.target.value });
  }

  handleChangeDescription = event => {
    this.setState({ description: event.target.value });
  }

  handleChangeSalary = event => {
    this.setState({ salary: event.target.value });
  }

  handleChangeBeginDate = event => {
    this.setState({ beginDate: event.target.value });
  }

  handleChanEndDate = event => {
    this.setState({ endDate: event.target.value });
  }

  handleChangeIdCandidates = event => {
    this.setState({ candidatesId: event.target.value });
  }

  handleChangeIdDelete = event => {
    this.setState({ idDelete: event.target.value });
  }

  handleChangeIdDeleteExperiencia = event => {
    this.setState({ idDeleteExperiencia: event.target.value });
  }

  handleChangeIdPutExperiencia = event => {
    this.setState({ idPutExperience: event.target.value });
  }

  handleChangeIdPutCandidates = event => {
    this.setState({ idPutCandidates: event.target.value });
  }

  handleSubmitGet = event => {
    event.preventDefault();

    axios.get('https://api-infojobs.herokuapp.com/api/v1/candidates')
      .then(res => {
        const resGet = res.data;
        this.setState({ resGet: resGet });
        console.log(res.data)
      })

  }

  handleSubmitGetExperience = event => {
    event.preventDefault();

    axios.get('https://api-infojobs.herokuapp.com/api/v1/experiences')
      .then(res => {
        const resGet = res.data;
        this.setState({ resGetExperience: resGet });
        console.log(res.data)
      })

  }

  handleSubmitPostCandidate = event => {
    event.preventDefault();

    const candidates = {
      name: this.state.name,
      surname: this.state.surname,
      email: this.state.email,
      birthday: this.state.birthday
    }

    axios.post(`https://api-infojobs.herokuapp.com/api/v1/candidates`, candidates)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })

    axios.get('https://api-infojobs.herokuapp.com/api/v1/candidates')
      .then(res => {
        const resGet = res.data;
        this.setState({ resGetCandidates: resGet });
        console.log(res.data)
      })
  }

  handleSubmitPostExperience = event => {
    event.preventDefault();

    const experience = {
      company: this.state.company,
      job: this.state.job,
      description: this.state.description,
      salary: this.state.salary,
      beginDate: this.state.beginDate,
      endDate: this.state.endDate,
      candidatesId: this.state.candidatesId
    }

    axios.post(`https://api-infojobs.herokuapp.com/api/v1/experiences`, experience)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  handleSubmitDelite = event => {
    event.preventDefault();

    axios.delete(`https://api-infojobs.herokuapp.com/api/v1/${this.state.idDelete}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  handleSubmitDeliteExperiences = event => {
    event.preventDefault();

    axios.delete(`https://api-infojobs.herokuapp.com/api/v1/${this.state.idDeleteExperiencia}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  handleSubmitDeliteExperiences = event => {
    event.preventDefault();

    axios.delete(`https://api-infojobs.herokuapp.com/api/v1/${this.state.idDeleteExperiencia}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  handleSubmitDeliteExperiences = event => {
    event.preventDefault();

    axios.delete(`https://api-infojobs.herokuapp.com/api/v1/${this.state.idDeleteExperiencia}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  handleSubmitPutCandidates = event => {
    event.preventDefault();

    const candidates = {
      name: this.state.name,
      surname: this.state.surname,
      email: this.state.email,
      birthday: this.state.birthday
    }

    axios.put(`https://api-infojobs.herokuapp.com/api/v1/${this.state.idPutCandidates}`, candidates)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  handleSubmitPutExperiences = event => {
    event.preventDefault();

    const experience = {
      company: this.state.company,
      job: this.state.job,
      description: this.state.description,
      salary: this.state.salary,
      beginDate: this.state.beginDate,
      endDate: this.state.endDate,
      candidatesId: this.state.candidatesId
    }
    
    console.log(this.state.candidatesId)
    axios.put(`https://api-infojobs.herokuapp.com/api/v1/${this.state.idPutExperience}`, experience)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <section className="Painel-get">
          <form className="Form-get" onSubmit={this.handleSubmitGet}>

            <button type="submit" className="Button-get">GET Candidato</button>
          </form>

          <p>{
            this.state.resGet.map(candidato => <p>
              <strong> id:</strong> {candidato.id} <br />
              <strong> name:</strong> {candidato.name} <br />
              <strong> surname:</strong> {candidato.surname} <br />
              <strong> birthday:</strong> {candidato.birthday} <br />
              <strong> email:</strong> {candidato.email} <br />
              <strong> insertDate:</strong> {candidato.insertDate} <br />
              <strong> modifyDate:</strong> {candidato.modifyDate} <br />
              <strong> age:</strong> {candidato.age} <br />
            </p>)
          }</p>
        </section>

        <section className="Painel-post-candidate">
          <form className="Form-post" onSubmit={this.handleSubmitPostCandidate}>
            <label>Nome: </label>
            <input type="text" onChange={this.handleChangeName}></input>

            <label>Sobrenome: </label>
            <input type="text" onChange={this.handleChangeSurname}></input>

            <label>Email: </label>
            <input type="email" onChange={this.handleChangeEmail}></input>

            <label>Aniversário: </label>
            <input type="text" onChange={this.handleChangeBirthday} placeholder="yyyy-mm-dd"></input>

            <button type="submit" className="Button-get">POST Candidato</button>
          </form>
        </section>

        <section className="Painel-get-experience">
          <form className="Form-get" onSubmit={this.handleSubmitGetExperience}>

            <button type="submit" className="Button-get">GET Experiências</button>
          </form>

          <p>{
            this.state.resGetExperience.map(experience => <p>
              <strong> id:</strong> {experience.id} <br />
              <strong> company:</strong> {experience.company} <br />
              <strong> job:</strong> {experience.job} <br />
              <strong> description:</strong> {experience.description} <br />
              <strong> salary:</strong> {experience.salary} <br />
              <strong> beginDate:</strong> {experience.beginDate} <br />
              <strong> endDate:</strong> {experience.endDate} <br />
              <strong> candidatesId:</strong> {experience.candidatesId} <br />
            </p>)
          }</p>
        </section>

        <section className="Painel-post-experience">
          <form className="Form-post" onSubmit={this.handleSubmitPostExperience}>
            <label>Companhia: </label>
            <input type="text" onChange={this.handleChangeCompany}></input>

            <label>Trabalho: </label>
            <input type="text" onChange={this.handleChangeJob}></input>

            <label>Descrição: </label>
            <input type="text" onChange={this.handleChangeDescription}></input>

            <label>Salário: </label>
            <input type="text" onChange={this.handleChangeSalary}></input>

            <label>Data de início: </label>
            <input type="text" onChange={this.handleChangeBeginDate} placeholder="yyyy-mm-dd"></input>

            <label>Data de término: </label>
            <input type="text" onChange={this.handleChanEndDate} placeholder="yyyy-mm-dd"></input>

            <select className="SelecCandidates" name="entidade" onChange={this.handleChangeIdCandidates}>
              {this.selectCandidates()}
              <option key="1" value="0">Selecionar</option>
            </select>

            <button type="submit" className="Button-get">POST Experiências</button>
          </form>
        </section>

        <section className="Painel-delete">
          <form className="Form-post" onSubmit={this.handleSubmitDelite}>
            <label>Id candidato: </label>
            <input type="text" onChange={this.handleChangeIdDelete}></input>

            <button type="submit" className="Button-get">Deletar</button>
          </form>

          <form className="Form-delete-experience" onSubmit={this.handleSubmitDeliteExperiences}>

            <label>Id experiência: </label>
            <input type="text" onChange={this.handleChangeIdDeleteExperiencia}></input>

            <button type="submit" className="Button-get">Deletar</button>
          </form>
        </section>

        <section className="Painel-put">
          <form className="Form-post" onSubmit={this.handleSubmitPutCandidates}>
            <label>ID que será alterado: </label>
            <input type="text" onChange={this.handleChangeIdPutCandidates}></input>

            <label>Nome: </label>
            <input type="text" onChange={this.handleChangeName}></input>

            <label>Sobrenome: </label>
            <input type="text" onChange={this.handleChangeSurname}></input>

            <label>Email: </label>
            <input type="email" onChange={this.handleChangeEmail}></input>

            <label>Aniversário: </label>
            <input type="text" onChange={this.handleChangeBirthday} placeholder="yyyy-mm-dd"></input>

            <button type="submit" className="Button-get">PUT Candidato</button>
          </form>

          <form className="Form-post" onSubmit={this.handleSubmitPutExperiences}>
            <label>ID que será alterado: </label>
            <input type="text" onChange={this.handleChangeIdPutExperiencia}></input>

            <label>Companhia: </label>
            <input type="text" onChange={this.handleChangeCompany}></input>

            <label>Trabalho: </label>
            <input type="text" onChange={this.handleChangeJob}></input>

            <label>Descrição: </label>
            <input type="text" onChange={this.handleChangeDescription}></input>

            <label>Salário: </label>
            <input type="text" onChange={this.handleChangeSalary}></input>

            <label>Data de início: </label>
            <input type="text" onChange={this.handleChangeBeginDate} placeholder="yyyy-mm-dd"></input>

            <label>Data de término: </label>
            <input type="text" onChange={this.handleChanEndDate} placeholder="yyyy-mm-dd"></input>

            <select className="SelecCandidates" name="entidade" onChange={this.handleChangeIdCandidates}>
              {this.selectCandidates()}
              <option key="1" value="0">Selecionar</option>
            </select>

            <button type="submit" className="Button-get">PUT Experiências</button>
          </form>
        </section>
      </div>
    )
  }
}
