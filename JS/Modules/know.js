class Classes{
	constructor(){
    	this.name={"Investors": "MedLabs S.A. receives approval for conducting Phase 1 Clinical Trial of its Novel Molecule GRC 54276 in patients with Advanced Solid Tumors and Hodgkin's Lymphoma. MedLabs reports revenue growth of 13.9% and EBITDA growth of 30.8% YoY for Q3 FY 2021-22", "Risks":"MedLabs Pharmaceuticals receives ANDA tentative approval for Regadenoson Injection, 0.4 mg/5 mL (0.08 mg/mL) Single-Dose Pre-Filled Syringe","Error":"Our unique focus on Innovation and Generics allows us to contribute to addressing unmet medical needs and enriching lives globally. As entry level talent this allows you to embark on an accelerated growth path rich in both breadth and depth of experiences and choices."};
    }
  	displayInfo(){
    	return this.name;
    }
}

let run = new Classes();

const getData = function (button="Investors") {
    const lowerType = button.toLowerCase();
    if ( lowerType === "investors") {
        return run.displayInfo().Investors;
    } else if ( lowerType === "risks") {
        return run.displayInfo().Risks;
    } else if ( lowerType === "error") {
        return run.displayInfo().Error;
    }
}

export {getData}