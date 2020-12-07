const CreateModal = ({ id, modalName }) => {
  let addSupplierPage = `<div
                              class="modal fade"
                              id="${id}"
                              tabindex="-1"
                              aria-labelledby="exampleModalLabel"
                              aria-hidden="true"
                              >
                                <div class="modal-dialog modal-xl">
                                  <div class="modal-content">
                                    <div class="modal-header">
                                      <h5 class="modal-title text-center" id="exampleModalLabel">
                                        ${modalName}
                                      </h5>
                                      <button
                                        type="button"
                                        class="close"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                      >
                                        <span aria-hidden="true">&times;</span>
                                      </button>
                                    </div>  
                                    <div class="modal-body" id="mainModal">
                                          FUCK
                                    </div>
                                  </div>
                                </div>
                                </div>`;

  let modalContainer = document.querySelector("#ModalContainer");

  modalContainer.innerHTML = addSupplierPage;
};

function ActionButtonBox(Buttons = []) {
  let renderedButtons = CompressHtml(Buttons);

  let template = `<div class="form-group">
                                                        
                      ${renderedButtons}
                          
                  </div>`;
  return template;
}

function CreateCombobox(options) {
  let renderedOptions = CompressHtml(options);

  let template = `<div class="col-md-3 mb-3">
                          <label for="validationDefault04">Rubro del proveedor</label>
                          <select class="custom-select" id="validationDefault04" required>
                            ${renderedOptions}
                          </select>
                      </div>`;

  return template;
}

function DataTable() {
  let template = `<div  class="container"
                        id="tableContainer">
                      
                          <table class="table table-dark"
                                  id="Table">
                          </table>

                    </div>`;

  return template;
}

function GenerateTable(arrData) {
  let table = document.querySelector("table");
  let data = Object.keys(arrData[0]);

  generateTableHead(table, data);
  generateTable(table, arrData);
}

let CreateInputForm = ({ id, labelText, inputValue, placeHolder }) => {
  
  let template = `<div class="col-md-3 mb-3">
                          <label for="${id}">${labelText}</label>
  
                          <input type="text" 
                                  class="form-control"
                                  id="${id}" 
                                  value="${inputValue}" 
                                  placeholder="${placeHolder}"  
                                  />
  
                          <div class="valid-tooltip">
                              
                          </div>
                      </div>`;

  return template;
};

function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

let CreateCheckBox = ({ id, value, innerText }) => {
  let template = `<div class="form-check">
                          <input class="form-check-input btn" type="checkbox" value=${value} id=${id} required>
                          <label class="form-check-label" for=${id}>
                              ${innerText}
                          </label>
                       </div>`;
  return template;
};

function CreateCheckBoxes(title) {
  let checkBoxes = [
    {
      component: CreateCheckBox({
        id: "invalidCheck1",
        innerText: "Bebidas",
        value: "",
      }),
    },

    {
      component: CreateCheckBox({
        id: "invalidCheck2",
        innerText: "Galletas y postres",
        value: "",
      }),
    },

    {
      component: CreateCheckBox({
        id: "invalidCheck3",
        innerText: "Reposteria",
        value: "",
      }),
    },
    {
      component: CreateCheckBox({
        id: "invalidCheck4",
        innerText: "Alcohol",
        value: "",
      }),
    },
    {
      component: CreateCheckBox({
        id: "invalidCheck3",
        innerText: "Verduras",
        value: "",
      }),
    },
    {
      component: CreateCheckBox({
        id: "invalidCheck4",
        innerText: "Limpiadores",
        value: "",
      }),
    },
    {
      component: CreateCheckBox({
        id: "invalidCheck3",
        innerText: "Verduras",
        value: "",
      }),
    },
    {
      component: CreateCheckBox({
        id: "invalidCheck4",
        innerText: "Limpiadores",
        value: "",
      }),
    },
    {
      component: CreateCheckBox({
        id: "invalidCheck3",
        innerText: "Verduras",
        value: "",
      }),
    },
    {
      component: CreateCheckBox({
        id: "invalidCheck4",
        innerText: "Limpiadores",
        value: "",
      }),
    },
  ];

  let renderedCheckboxes = CompressHTML(checkBoxes);

  let data = `<div class="col-md-6 mb-4">
              
                    <div class="form-group">
                        <label for="validationTooltip05">
                            ${title}
                        </label>
                        
                        <div class="displayFlex">
                            ${renderedCheckboxes}
                        </div>
  
  
                      </div>
  
                </div>`;
  return data;
}

function CompressHtml(items) {
  let newData = items.reduce((renderedHtml, current) => {
    return renderedHtml + current.component;
  }, "");

  return newData;
}

function CompressHTML(components) {
  let renderedComponents = "";

  components.forEach((compt) => {
    renderedComponents += compt.component;
  });

  return renderedComponents;
}

function AddEventClickToComponent({ id, actionToDo }) {
  let data = document.querySelector(`#${id}`);
  data.addEventListener("click", actionToDo);
}

function ModifyModalContainer(newHTML, id) {
  let mainContainer = document.querySelector(`#${id}`);

  mainContainer.innerHTML = newHTML;
}


//Definiendo el dominio

class SupplierForm extends IFormPresenter {
  constructor() {
    super();
  }

  static Render() {
    console.log("render working");
  }

  Render() {
    AddProviderForm();
    console.log("render nonstatic working");
  }
}

class AddPrductsForm extends IFormPresenter {


  constructor() {
    super();
  }

  static Render() {
    console.log("render working");
  }

  Render() {
    AddProductsForm();
    console.log("render nonstatic working");
  }
}

const inventoryMenu = {
  AddSupplier: "AddSupplierButton",
  AddProducts: "AddProductsButton",
};
