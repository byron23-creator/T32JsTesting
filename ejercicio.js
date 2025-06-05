class Surgeon {
    constructor(name, department) {
      // Paso 1
      this._name = name;
      this._department = department;
      // Paso 2
      this._remainingVacationDays = 20;
    }
  
    // Paso 3
    get name() {
      return this._name;
    }
  
    // Paso 4
    get department() {
      return this._department;
    }
  
    // Paso 5
    get remainingVacationDays() {
      return this._remainingVacationDays;
    }
  
    // Paso 6
    takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff;
    }
  }
  
  const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
  const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');
  
  console.log(surgeonRomero.name); 
  console.log(surgeonRomero.department); 
  console.log(surgeonRomero.remainingVacationDays); 
  
  surgeonRomero.takeVacationDays(5);
  console.log(surgeonRomero.remainingVacationDays); 
  
  console.log(surgeonJackson.name); 
  console.log(surgeonJackson.remainingVacationDays); 
  surgeonJackson.takeVacationDays(10);
  console.log(surgeonJackson.remainingVacationDays); 