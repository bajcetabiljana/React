import React from 'react';


const Ninjas = ({ninjas}) => {
    // console.log(this.props);
    // const {ninjas} = this.props;

  const listNinja = ninjas.map(ninja => {
    if (ninja.age > 6) {
      return(
    <div className='ninja' key={ninja.id}>
      <h1> Ninjas page </h1>
      <p> Name: {ninja.name} </p>
      <p> Age: {ninja.age} </p>
      <p> Belt: {ninja.belt} </p>
  </div>
  )
    } else return <div> Zao nam je ali ovaj ninza ne ispunjava Vase uslove!!! </div>;
  })
  // const listNinja = ninjas.map(ninja => {
  //   return ninja.age < 9 ? (
  //     <div className='ninja' key={ninja.id}>
  //       <h1> Ninjas page </h1>
  //       <p> Name: {ninja.name} </p>
  //       <p> Age: {ninja.age} </p>
  //       <p> Belt: {ninja.belt} </p>
  //    </div>
  //    ) :  <div> Nista!! </div>
  // })
  return(
    <div className='ninjaList'>
      {listNinja}
    </div>

  )
}

export default Ninjas;