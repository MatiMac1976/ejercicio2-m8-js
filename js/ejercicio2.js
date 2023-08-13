const planesCredito = [
    { nombre: 'Plan 001', capital: 150000, plazo: 30, tasa: 15 },
    { nombre: 'Plan 002', capital: 300000, plazo: 180, tasa: 10 },
    { nombre: 'Plan 003', capital: 485000, plazo: 60, tasa: 23 }
  ];

  function calcularInteres(capital, plazo, tasa) {
    return (capital * plazo * tasa) / 100;
  }
  
  const informacionCreditos = planesCredito.map(plan => {
    const interes = calcularInteres(plan.capital, plan.plazo, plan.tasa);
    const totalPagar = plan.capital + interes;
    return {
      nombre: plan.nombre,
      capital: plan.capital,
      plazo: plan.plazo,
      tasa: plan.tasa,
      interes: interes,
      totalPagar: totalPagar
    };
  });
  
  console.log(informacionCreditos);