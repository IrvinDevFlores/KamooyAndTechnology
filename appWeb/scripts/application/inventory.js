AddEventClickToComponent({
  id: "AddProductsButton",
  actionToDo: UseFormBasedOnClick,
});

AddEventClickToComponent({
  id: "AddSupplierButton",
  actionToDo: UseFormBasedOnClick,
});

let options = [
  { component: `<option selected disabled value="">Choose...</option>` },
  { component: `<option>Lacteos</option>` },
  { component: `<option>Bebidas</option>` },
];

//bug en el height de la tabla no se adapta correctamente

let Buttons = [
  { component: '<button class="btn btn-info" type="button">Nuevo</button> ' },
  { component: '<button class="btn btn-success" type="button">Guardar</button> ' },
  { component: '<button class="btn btn-warning" type="button">Editar</button> ' },
  { component: '<button class="btn btn-danger" type="button">Borrar</button> ' },
];

let proveedores = [
  { numero: "+50495865845", nombre: "Peter", apellido: " Gonzales", edad: 29 },
];

const components = [
  {
    component: CreateInputForm({
      id: "validationTooltip01",
      labelText: "Nombre proveedor",
      inputValue: "",
      placeHolder: "Direccion del proveedor",
    }),
  },

  {
    component: CreateInputForm({
      id: "validationTooltip02",
      labelText: "Direccion del proveedor",
      inputValue: "",
      placeHolder: "Direccion del proveedor",
    }),
  },

  { component: CreateCombobox(options) },
  {
    component: CreateInputForm({
      id: "validationTooltip02",
      labelText: "Numero de telefono",
      inputValue: "",
      placeHolder: "+504",
    }),
  },

  {
    component: CreateInputForm({
      id: "validationTooltip02",
      labelText: "Correo proveedor",
      inputValue: "",
      placeHolder: "correo@example.com",
    }),
  },

  { component: CreateCheckBoxes("Categorias de productos") },
];

const AddProviderForm = () => {
  let formRows = CreateFormRows(components);
  let providerForm = CreateForm(formRows);

  ModifyModalContainer(providerForm, "mainModal");

  GenerateTable(proveedores);
};

function CreateFormRows(Components) {
  let renderedContent = CompressHTML(Components);

  let formRows = [
    {
      component: `<div 
                    id="formComponents"
                    class="form-row">
                    ${renderedContent}
                </div>`,
    },

    {
      component: `<div 
                    class="form-row"
                    id="TableContainer">
                              
                     ${DataTable()}  
                        
                 </div>`,
    },

    {
      component: `<div class="form-row">
                    ${ActionButtonBox(Buttons)}

                </div>`,
    },
  ];
  return formRows;
}

function CreateForm(Items) {
  let renderedItems = CompressHtml(Items);

  let formTemplate = `<form class="needs-validation" novalidate>

                        ${renderedItems}

                      </form>`;

  return formTemplate;
}

let addProductsFormInputs = [
  {
    component: CreateInputForm({
      id: "validationTooltip01",
      labelText: "Nombre Producto",
      inputValue: "",
      placeHolder: "Nombre del producto",
    }),
  },

  {
    component: CreateInputForm({
      id: "validationTooltip02",
      labelText: "Precio Producto",
      inputValue: "",
      placeHolder: "Precio",
    }),
  },

  { component: CreateCombobox(options) },

  {
    component: CreateInputForm({
      id: "validationTooltip02",
      labelText: "Codigo Unico",
      inputValue: "",
      placeHolder: "",
    }),
  },

  {
    component: CreateInputForm({
      id: "validationTooltip02",
      labelText: "Unidad de medida",
      inputValue: "",
      placeHolder: "correo@example.com",
    }),
  },

  { component: CreateCheckBoxes("Categorias de productos a vender") },
];

const AddProductsForm = () => {

  let formRows = CreateFormRows(addProductsFormInputs);
  let productsForm = CreateForm(formRows);

  ModifyModalContainer(productsForm, "mainModal");
};

CreateModal({
  id: "InventorySupplierModal",
  modalName: "Registro Proveedores",
});

const actions = new Map();

actions.set(inventoryMenu.AddSupplier, new SupplierForm());
actions.set(inventoryMenu.AddProducts, new AddPrductsForm());

//Other FORM
function UseFormBasedOnClick(event) {
  let { id } = event.target;

  const generatedForm = GetFromMap(actions, id);

  generatedForm.Render();
}
