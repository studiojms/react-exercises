import React from 'react';

//
// Implementação com hooks
//
// function Example01() {
//   const [nome, setNome] = React.useState('');
//
//   return (
//     <>
//       <h2 className="sv-text-center">Welcome</h2>
//       <div className="sv-row">
//         <div className="sv-column" />
//         <div className="sv-column">
//           <form className="sv-form">
//             <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
//             {nome && (
//               <div className="sv-text-center">
//                 Bem vindo <strong>{nome}</strong>!
//               </div>
//             )}
//           </form>
//         </div>
//         <div className="sv-column" />
//       </div>
//     </>
//   );
// }

class UsingState extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nome: '' };
  }

  render() {
    return (
      <>
        <h2 className="sv-text-center">Welcome</h2>
        <div className="sv-row">
          <div className="sv-column" />
          <div className="sv-column">
            <form className="sv-form">
              <input type="text" value={this.state.nome} onChange={(e) => this.setState({ nome: e.target.value })} />
              {this.state.nome && (
                <div className="sv-text-center">
                  Bem vindo <strong>{this.state.nome}</strong>!
                </div>
              )}
            </form>
          </div>
          <div className="sv-column" />
        </div>
      </>
    );
  }
}

export default UsingState;
