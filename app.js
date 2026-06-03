const STORAGE_KEY = "diarioDeBordoPwa.v1";

const defaultState = {
  settings: {
    driverName: "",
    unit: "",
    managerName: "",
    defaultVehicleName: "",
    defaultPlate: ""
  },
  vehicles: [],
  trips: [],
  fuelRecords: []
};

const PARANA_MUNICIPALITIES = [
  "Abatiá",
  "Adrianópolis",
  "Agudos do Sul",
  "Almirante Tamandaré",
  "Altamira do Paraná",
  "Alto Paraíso",
  "Alto Paraná",
  "Alto Piquiri",
  "Altônia",
  "Alvorada do Sul",
  "Amaporã",
  "Ampére",
  "Anahy",
  "Andirá",
  "Ângulo",
  "Antonina",
  "Antônio Olinto",
  "Apucarana",
  "Arapongas",
  "Arapoti",
  "Arapuã",
  "Araruna",
  "Araucária",
  "Ariranha do Ivaí",
  "Assaí",
  "Assis Chateaubriand",
  "Astorga",
  "Atalaia",
  "Balsa Nova",
  "Bandeirantes",
  "Barbosa Ferraz",
  "Barra do Jacaré",
  "Barracão",
  "Bela Vista da Caroba",
  "Bela Vista do Paraíso",
  "Bituruna",
  "Boa Esperança",
  "Boa Esperança do Iguaçu",
  "Boa Ventura de São Roque",
  "Boa Vista da Aparecida",
  "Bocaiúva do Sul",
  "Bom Jesus do Sul",
  "Bom Sucesso",
  "Bom Sucesso do Sul",
  "Borrazópolis",
  "Braganey",
  "Brasilândia do Sul",
  "Cafeara",
  "Cafelândia",
  "Cafezal do Sul",
  "Califórnia",
  "Cambará",
  "Cambé",
  "Cambira",
  "Campina Grande do Sul",
  "Campina da Lagoa",
  "Campina do Simão",
  "Campo Bonito",
  "Campo Largo",
  "Campo Magro",
  "Campo Mourão",
  "Campo do Tenente",
  "Cândido de Abreu",
  "Candói",
  "Cantagalo",
  "Capanema",
  "Capitão Leônidas Marques",
  "Carambeí",
  "Carlópolis",
  "Cascavel",
  "Castro",
  "Catanduvas",
  "Centenário do Sul",
  "Cerro Azul",
  "Céu Azul",
  "Chopinzinho",
  "Cianorte",
  "Cidade Gaúcha",
  "Clevelândia",
  "Colombo",
  "Colorado",
  "Congonhinhas",
  "Conselheiro Mairinck",
  "Contenda",
  "Corbélia",
  "Cornélio Procópio",
  "Coronel Domingos Soares",
  "Coronel Vivida",
  "Corumbataí do Sul",
  "Cruz Machado",
  "Cruzeiro do Iguaçu",
  "Cruzeiro do Oeste",
  "Cruzeiro do Sul",
  "Cruzmaltina",
  "Curitiba",
  "Curiúva",
  "Diamante D'Oeste",
  "Diamante do Norte",
  "Diamante do Sul",
  "Dois Vizinhos",
  "Douradina",
  "Doutor Camargo",
  "Doutor Ulysses",
  "Enéas Marques",
  "Engenheiro Beltrão",
  "Entre Rios do Oeste",
  "Esperança Nova",
  "Espigão Alto do Iguaçu",
  "Farol",
  "Faxinal",
  "Fazenda Rio Grande",
  "Fênix",
  "Fernandes Pinheiro",
  "Figueira",
  "Flor da Serra do Sul",
  "Floraí",
  "Floresta",
  "Florestópolis",
  "Flórida",
  "Formosa do Oeste",
  "Foz do Iguaçu",
  "Foz do Jordão",
  "Francisco Alves",
  "Francisco Beltrão",
  "General Carneiro",
  "Godoy Moreira",
  "Goioerê",
  "Goioxim",
  "Grandes Rios",
  "Guaíra",
  "Guairaçá",
  "Guamiranga",
  "Guapirama",
  "Guaporema",
  "Guaraci",
  "Guaraniaçu",
  "Guarapuava",
  "Guaraqueçaba",
  "Guaratuba",
  "Honório Serpa",
  "Ibaiti",
  "Ibema",
  "Ibiporã",
  "Icaraíma",
  "Iguaraçu",
  "Iguatu",
  "Imbaú",
  "Imbituva",
  "Inácio Martins",
  "Inajá",
  "Indianópolis",
  "Ipiranga",
  "Iporã",
  "Iracema do Oeste",
  "Irati",
  "Iretama",
  "Itaguajé",
  "Itaipulândia",
  "Itambaracá",
  "Itambé",
  "Itapejara d'Oeste",
  "Itaperuçu",
  "Itaúna do Sul",
  "Ivaí",
  "Ivaiporã",
  "Ivaté",
  "Ivatuba",
  "Jaboti",
  "Jacarezinho",
  "Jaguapitã",
  "Jaguariaíva",
  "Jandaia do Sul",
  "Janiópolis",
  "Japira",
  "Japurá",
  "Jardim Alegre",
  "Jardim Olinda",
  "Jataizinho",
  "Jesuítas",
  "Joaquim Távora",
  "Jundiaí do Sul",
  "Juranda",
  "Jussara",
  "Kaloré",
  "Lapa",
  "Laranjal",
  "Laranjeiras do Sul",
  "Leópolis",
  "Lidianópolis",
  "Lindoeste",
  "Loanda",
  "Lobato",
  "Londrina",
  "Luiziana",
  "Lunardelli",
  "Lupionópolis",
  "Mallet",
  "Mamborê",
  "Mandaguaçu",
  "Mandaguari",
  "Mandirituba",
  "Manfrinópolis",
  "Mangueirinha",
  "Manoel Ribas",
  "Marechal Cândido Rondon",
  "Maria Helena",
  "Marialva",
  "Marilândia do Sul",
  "Marilena",
  "Mariluz",
  "Maringá",
  "Mariópolis",
  "Maripá",
  "Marmeleiro",
  "Marquinho",
  "Marumbi",
  "Matelândia",
  "Matinhos",
  "Mato Rico",
  "Mauá da Serra",
  "Medianeira",
  "Mercedes",
  "Mirador",
  "Miraselva",
  "Missal",
  "Moreira Sales",
  "Morretes",
  "Munhoz de Melo",
  "Nossa Senhora das Graças",
  "Nova Aliança do Ivaí",
  "Nova América da Colina",
  "Nova Aurora",
  "Nova Cantu",
  "Nova Esperança",
  "Nova Esperança do Sudoeste",
  "Nova Fátima",
  "Nova Laranjeiras",
  "Nova Londrina",
  "Nova Olímpia",
  "Nova Prata do Iguaçu",
  "Nova Santa Bárbara",
  "Nova Santa Rosa",
  "Nova Tebas",
  "Novo Itacolomi",
  "Ortigueira",
  "Ourizona",
  "Ouro Verde do Oeste",
  "Paiçandu",
  "Palmas",
  "Palmeira",
  "Palmital",
  "Palotina",
  "Paraíso do Norte",
  "Paranacity",
  "Paranaguá",
  "Paranapoema",
  "Paranavaí",
  "Pato Bragado",
  "Pato Branco",
  "Paula Freitas",
  "Paulo Frontin",
  "Peabiru",
  "Perobal",
  "Pérola",
  "Pérola d'Oeste",
  "Piên",
  "Pinhais",
  "Pinhal de São Bento",
  "Pinhalão",
  "Pinhão",
  "Piraí do Sul",
  "Piraquara",
  "Pitanga",
  "Pitangueiras",
  "Planaltina do Paraná",
  "Planalto",
  "Ponta Grossa",
  "Pontal do Paraná",
  "Porecatu",
  "Porto Amazonas",
  "Porto Barreiro",
  "Porto Rico",
  "Porto Vitória",
  "Prado Ferreira",
  "Pranchita",
  "Presidente Castelo Branco",
  "Primeiro de Maio",
  "Prudentópolis",
  "Quarto Centenário",
  "Quatiguá",
  "Quatro Barras",
  "Quatro Pontes",
  "Quedas do Iguaçu",
  "Querência do Norte",
  "Quinta do Sol",
  "Quitandinha",
  "Ramilândia",
  "Rancho Alegre",
  "Rancho Alegre D'Oeste",
  "Realeza",
  "Rebouças",
  "Renascença",
  "Reserva",
  "Reserva do Iguaçu",
  "Ribeirão Claro",
  "Ribeirão do Pinhal",
  "Rio Azul",
  "Rio Bom",
  "Rio Bonito do Iguaçu",
  "Rio Branco do Ivaí",
  "Rio Branco do Sul",
  "Rio Negro",
  "Rolândia",
  "Roncador",
  "Rondon",
  "Rosário do Ivaí",
  "Sabáudia",
  "Salgado Filho",
  "Salto do Itararé",
  "Salto do Lontra",
  "Santa Amélia",
  "Santa Cecília do Pavão",
  "Santa Cruz de Monte Castelo",
  "Santa Fé",
  "Santa Helena",
  "Santa Inês",
  "Santa Isabel do Ivaí",
  "Santa Izabel do Oeste",
  "Santa Lúcia",
  "Santa Maria do Oeste",
  "Santa Mariana",
  "Santa Mônica",
  "Santa Tereza do Oeste",
  "Santa Terezinha de Itaipu",
  "Santana do Itararé",
  "Santo Antônio da Platina",
  "Santo Antônio do Caiuá",
  "Santo Antônio do Paraíso",
  "Santo Antônio do Sudoeste",
  "Santo Inácio",
  "São Carlos do Ivaí",
  "São Jerônimo da Serra",
  "São João",
  "São João do Caiuá",
  "São João do Ivaí",
  "São João do Triunfo",
  "São Jorge d'Oeste",
  "São Jorge do Ivaí",
  "São Jorge do Patrocínio",
  "São José da Boa Vista",
  "São José das Palmeiras",
  "São José dos Pinhais",
  "São Manoel do Paraná",
  "São Mateus do Sul",
  "São Miguel do Iguaçu",
  "São Pedro do Iguaçu",
  "São Pedro do Ivaí",
  "São Pedro do Paraná",
  "São Sebastião da Amoreira",
  "São Tomé",
  "Sapopema",
  "Sarandi",
  "Saudade do Iguaçu",
  "Sengés",
  "Serranópolis do Iguaçu",
  "Sertaneja",
  "Sertanópolis",
  "Siqueira Campos",
  "Sulina",
  "Tamarana",
  "Tamboara",
  "Tapejara",
  "Tapira",
  "Teixeira Soares",
  "Telêmaco Borba",
  "Terra Boa",
  "Terra Rica",
  "Terra Roxa",
  "Tibagi",
  "Tijucas do Sul",
  "Toledo",
  "Tomazina",
  "Três Barras do Paraná",
  "Tunas do Paraná",
  "Tuneiras do Oeste",
  "Tupãssi",
  "Turvo",
  "Ubiratã",
  "Umuarama",
  "União da Vitória",
  "Uniflor",
  "Uraí",
  "Ventania",
  "Vera Cruz do Oeste",
  "Verê",
  "Virmond",
  "Vitorino",
  "Wenceslau Braz",
  "Xambrê"
];

const monthNames = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro"
];

let state = loadState();
let deferredInstallPrompt = null;

const els = {
  installButton: document.getElementById("installButton"),
  toast: document.getElementById("toast"),
  settingsForm: document.getElementById("settingsForm"),
  vehicleForm: document.getElementById("vehicleForm"),
  cancelVehicleEdit: document.getElementById("cancelVehicleEdit"),
  vehicleList: document.getElementById("vehicleList"),
  departureForm: document.getElementById("departureForm"),
  arrivalForm: document.getElementById("arrivalForm"),
  fuelForm: document.getElementById("fuelForm"),
  fuelList: document.getElementById("fuelList"),
  tripList: document.getElementById("tripList"),
  openTripBox: document.getElementById("openTripBox"),
  homeSummary: document.getElementById("homeSummary"),
  monthFilter: document.getElementById("monthFilter"),
  yearFilter: document.getElementById("yearFilter"),
  reportMonthFilter: document.getElementById("reportMonthFilter"),
  reportYearFilter: document.getElementById("reportYearFilter"),
  monthlyReport: document.getElementById("monthlyReport"),
  copyWhatsAppButton: document.getElementById("copyWhatsAppButton"),
  exportCsvButton: document.getElementById("exportCsvButton"),
  exportPdfButton: document.getElementById("exportPdfButton"),
  exportBackupButton: document.getElementById("exportBackupButton"),
  importBackupInput: document.getElementById("importBackupInput"),
  editTripDialog: document.getElementById("editTripDialog"),
  editTripForm: document.getElementById("editTripForm"),
  closeEditDialog: document.getElementById("closeEditDialog")
};

init();

function init() {
  setupFilters();
  setupMunicipalitySelects();
  bindEvents();
  fillSettingsForm();
  refreshAutomaticFields(true);
  renderAll();
  registerServiceWorker();
}

function bindEvents() {
  document.querySelectorAll(".tab, .action-tab").forEach((button) => {
    button.addEventListener("click", () => showView(button.dataset.tab));
  });

  els.settingsForm.addEventListener("submit", saveSettings);
  els.vehicleForm.addEventListener("submit", saveVehicle);
  els.cancelVehicleEdit.addEventListener("click", resetVehicleForm);
  els.departureForm.addEventListener("submit", openTrip);
  els.arrivalForm.addEventListener("submit", closeTrip);
  els.fuelForm.addEventListener("submit", saveFuelRecord);
  els.fuelForm.elements.totalAmount.addEventListener("input", formatCurrencyInput);
  els.fuelForm.elements.totalAmount.addEventListener("paste", pasteCurrencyInput);
  els.reportMonthFilter.addEventListener("change", () => syncFilters("report"));
  els.reportYearFilter.addEventListener("input", () => syncFilters("report"));
  els.monthFilter.addEventListener("change", () => syncFilters("trips"));
  els.yearFilter.addEventListener("input", () => syncFilters("trips"));
  els.copyWhatsAppButton.addEventListener("click", copyWhatsAppText);
  els.exportCsvButton.addEventListener("click", exportCsv);
  els.exportPdfButton.addEventListener("click", exportPdf);
  els.exportBackupButton.addEventListener("click", exportBackup);
  els.importBackupInput.addEventListener("change", importBackup);
  els.editTripForm.addEventListener("submit", saveEditedTrip);
  els.closeEditDialog.addEventListener("click", () => els.editTripDialog.close());

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    els.installButton.classList.remove("hidden");
  });

  els.installButton.addEventListener("click", async () => {
    if (!deferredInstallPrompt) return;
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    els.installButton.classList.add("hidden");
  });
}

function showView(viewId) {
  document.querySelectorAll(".view").forEach((view) => view.classList.remove("active"));
  document.getElementById(viewId).classList.add("active");
  document.querySelectorAll(".bottom-nav .tab").forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === viewId);
  });
  refreshAutomaticFields(viewId === "departureView" || viewId === "arrivalView" || viewId === "fuelView");
  renderAll();
}

function setupMunicipalitySelects() {
  const options = ["", "Fora do estado do PR", ...PARANA_MUNICIPALITIES]
    .map((name) => name ? `<option value="${escapeHtml(name)}">${escapeHtml(name)}</option>` : '<option value="">Selecione</option>')
    .join("");

  document.querySelectorAll('select[data-municipality="pr"]').forEach((select) => {
    const currentValue = select.value;
    select.innerHTML = options;
    select.value = currentValue;
  });
}
function setupFilters() {
  const now = new Date();
  const options = monthNames
    .map((name, index) => `<option value="${index + 1}">${name}</option>`)
    .join("");
  els.monthFilter.innerHTML = options;
  els.reportMonthFilter.innerHTML = options;
  els.monthFilter.value = String(now.getMonth() + 1);
  els.reportMonthFilter.value = String(now.getMonth() + 1);
  els.yearFilter.value = String(now.getFullYear());
  els.reportYearFilter.value = String(now.getFullYear());
}

function syncFilters(source) {
  if (source === "report") {
    els.monthFilter.value = els.reportMonthFilter.value;
    els.yearFilter.value = els.reportYearFilter.value;
  } else {
    els.reportMonthFilter.value = els.monthFilter.value;
    els.reportYearFilter.value = els.yearFilter.value;
  }
  renderAll();
}

function saveSettings(event) {
  event.preventDefault();
  state.settings = {
    ...state.settings,
    ...formToObject(els.settingsForm)
  };
  saveState();
  renderAll();
  toast("Definições salvas.");
}

function fillSettingsForm() {
  Object.entries(state.settings).forEach(([key, value]) => {
    if (els.settingsForm.elements[key]) {
      els.settingsForm.elements[key].value = value;
    }
  });
}

function saveVehicle(event) {
  event.preventDefault();
  const data = formToObject(els.vehicleForm);
  const isDefault = Boolean(els.vehicleForm.elements.isDefault.checked);
  const vehicle = {
    id: data.id || createId(),
    plate: normalizePlate(data.plate),
    model: data.model.trim(),
    notes: data.notes.trim(),
    isDefault,
    createdAt: new Date().toISOString()
  };

  if (!vehicle.plate || !vehicle.model) {
    toast("Informe placa e modelo.");
    return;
  }

  const duplicate = state.vehicles.find((item) => item.plate === vehicle.plate && item.id !== vehicle.id);
  if (duplicate) {
    toast("Já existe veículo com essa placa.");
    return;
  }

  if (isDefault) {
    state.vehicles.forEach((item) => {
      item.isDefault = false;
    });
    state.settings.defaultVehicleName = vehicle.model;
    state.settings.defaultPlate = vehicle.plate;
    fillSettingsForm();
  }

  const index = state.vehicles.findIndex((item) => item.id === vehicle.id);
  if (index >= 0) {
    state.vehicles[index] = { ...state.vehicles[index], ...vehicle };
  } else {
    state.vehicles.push(vehicle);
  }

  saveState();
  resetVehicleForm();
  renderAll();
  toast("Veículo salvo.");
}

function resetVehicleForm() {
  els.vehicleForm.reset();
  els.vehicleForm.elements.id.value = "";
  els.cancelVehicleEdit.classList.add("hidden");
}

function editVehicle(id) {
  const vehicle = state.vehicles.find((item) => item.id === id);
  if (!vehicle) return;
  Object.entries(vehicle).forEach(([key, value]) => {
    if (els.vehicleForm.elements[key]) {
      if (key === "isDefault") {
        els.vehicleForm.elements[key].checked = Boolean(value);
      } else {
        els.vehicleForm.elements[key].value = value;
      }
    }
  });
  els.cancelVehicleEdit.classList.remove("hidden");
  showView("settingsView");
}

function deleteVehicle(id) {
  const inUse = state.trips.some((trip) => trip.vehicleId === id);
  if (inUse) {
    toast("Não é possível excluir veículo usado em viagens.");
    return;
  }
  state.vehicles = state.vehicles.filter((vehicle) => vehicle.id !== id);
  saveState();
  renderAll();
  toast("Veículo excluído.");
}

function openTrip(event) {
  event.preventDefault();
  if (getOpenTrip()) {
    toast("Já existe uma viagem aberta.");
    return;
  }

  const data = formToObject(els.departureForm);
  const vehicle = getVehicle(data.vehicleId);
  if (!vehicle) {
    toast("Selecione um veículo.");
    return;
  }

  const initialKm = Number(data.initialKm);
  const lastKm = getLastFinalKm(vehicle.id);
  if (lastKm !== null && initialKm < lastKm) {
    toast(`Km inicial não deve ser menor que o último km final (${lastKm}).`);
    return;
  }

  const now = new Date();
  state.trips.push({
    id: createId(),
    vehicleId: vehicle.id,
    date: data.date,
    departureTime: data.departureTime,
    arrivalDate: "",
    arrivalTime: "",
    initialKm,
    finalKm: null,
    distanceKm: null,
    origin: data.origin.trim(),
    destination: data.destination.trim(),
    purpose: data.purpose.trim(),
    notes: data.notes.trim(),
    arrivalNotes: "",
    status: "open",
    createdAt: now.toISOString(),
    updatedAt: now.toISOString()
  });

  saveState();
  els.departureForm.reset();
  refreshAutomaticFields(true);
  renderAll();
  showView("homeView");
  toast("Viagem aberta.");
}

function closeTrip(event) {
  event.preventDefault();
  const data = formToObject(els.arrivalForm);
  const trip = state.trips.find((item) => item.id === data.tripId);
  if (!trip || trip.status !== "open") {
    toast("Nenhuma viagem aberta selecionada.");
    return;
  }

  const finalKm = Number(data.finalKm);
  if (finalKm < Number(trip.initialKm)) {
    toast("Km final não pode ser menor que km inicial.");
    return;
  }

  const now = new Date();
  trip.finalKm = finalKm;
  trip.arrivalDate = data.arrivalDate || trip.date;
  trip.arrivalTime = data.arrivalTime;
  trip.distanceKm = finalKm - Number(trip.initialKm);
  trip.arrivalNotes = data.arrivalNotes.trim();
  trip.status = "closed";
  trip.updatedAt = now.toISOString();

  saveState();
  els.arrivalForm.reset();
  refreshAutomaticFields(true);
  renderAll();
  showView("tripsView");
  toast("Viagem finalizada.");
}

function saveFuelRecord(event) {
  event.preventDefault();
  const data = formToObject(els.fuelForm);
  const vehicle = getVehicle(data.vehicleId);

  if (!vehicle) {
    toast("Selecione um veículo.");
    return;
  }

  const odometerKm = Number(data.odometerKm);
  const liters = Number(data.liters);
  const totalAmount = parseCurrency(data.totalAmount);

  if (odometerKm < 0 || liters <= 0 || !Number.isFinite(totalAmount) || totalAmount < 0) {
    toast("Confira km, litros e valor do abastecimento.");
    return;
  }

  const now = new Date();
  state.fuelRecords.push({
    id: createId(),
    vehicleId: vehicle.id,
    date: formatDateInput(now),
    time: formatTime(now),
    odometerKm,
    liters,
    totalAmount,
    station: data.station.trim(),
    fuelType: data.fuelType,
    notes: data.notes.trim(),
    createdAt: now.toISOString()
  });

  saveState();
  els.fuelForm.reset();
  refreshAutomaticFields();
  renderAll();
  toast("Abastecimento registrado.");
}

function saveEditedTrip(event) {
  event.preventDefault();
  const data = formToObject(els.editTripForm);
  const trip = state.trips.find((item) => item.id === data.id);
  if (!trip) return;

  const initialKm = Number(data.initialKm);
  const finalKm = data.finalKm === "" ? null : Number(data.finalKm);
  if (finalKm !== null && finalKm < initialKm) {
    toast("Km final não pode ser menor que km inicial.");
    return;
  }

  const updatedTrip = {
    ...trip,
    vehicleId: data.vehicleId,
    date: data.date,
    departureTime: data.departureTime,
    arrivalDate: data.arrivalDate || "",
    arrivalTime: data.arrivalTime,
    initialKm,
    finalKm,
    distanceKm: finalKm === null ? null : finalKm - initialKm,
    origin: data.origin.trim(),
    destination: data.destination.trim(),
    purpose: data.purpose.trim(),
    notes: data.notes.trim(),
    arrivalNotes: data.arrivalNotes.trim(),
    status: finalKm === null || !data.arrivalTime ? "open" : "closed",
    updatedAt: new Date().toISOString()
  };

  const openCount = state.trips.filter((item) => item.id === trip.id ? updatedTrip.status === "open" : item.status === "open").length;
  if (openCount > 1) {
    toast("Não é permitido manter mais de uma viagem aberta.");
    return;
  }

  Object.assign(trip, updatedTrip);
  saveState();
  els.editTripDialog.close();
  renderAll();
  toast("Viagem atualizada.");
}

function editTrip(id) {
  const trip = state.trips.find((item) => item.id === id);
  if (!trip) return;
  els.editTripForm.reset();
  fillVehicleSelect(els.editTripForm.elements.vehicleId, trip.vehicleId);
  Object.entries(trip).forEach(([key, value]) => {
    if (els.editTripForm.elements[key]) {
      els.editTripForm.elements[key].value = value ?? "";
    }
  });
  els.editTripForm.elements.arrivalDate.value = trip.arrivalDate || (trip.status === "closed" ? trip.date : "");
  els.editTripDialog.showModal();
}

function deleteTrip(id) {
  state.trips = state.trips.filter((trip) => trip.id !== id);
  saveState();
  renderAll();
  toast("Registro excluído.");
}

function renderAll() {
  renderVehicleSelects();
  renderVehicles();
  renderOpenTrip();
  renderFuelRecords();
  renderTrips();
  renderReport();
}

function renderVehicleSelects() {
  fillVehicleSelect(els.departureForm.elements.vehicleId, getDefaultVehicleId());
  fillVehicleSelect(els.fuelForm.elements.vehicleId, getDefaultVehicleId());
  fillVehicleSelect(els.arrivalForm.elements.tripId, "");
  const openTrip = getOpenTrip();
  els.arrivalForm.elements.tripId.innerHTML = openTrip
    ? `<option value="${openTrip.id}">${tripTitle(openTrip)}</option>`
    : '<option value="">Nenhuma viagem aberta</option>';
}

function fillVehicleSelect(select, selectedId) {
  select.innerHTML = '<option value="">Selecione</option>';
  state.vehicles.forEach((vehicle) => {
    const option = document.createElement("option");
    option.value = vehicle.id;
    option.textContent = `${vehicle.plate} - ${vehicle.model}`;
    option.selected = vehicle.id === selectedId;
    select.appendChild(option);
  });
}

function renderVehicles() {
  if (!state.vehicles.length) {
    els.vehicleList.innerHTML = '<div class="empty">Nenhum veículo cadastrado.</div>';
    return;
  }

  els.vehicleList.innerHTML = state.vehicles
    .map(
      (vehicle) => `
        <article class="item">
          <div class="item-title">
            <span>${escapeHtml(vehicle.plate)} - ${escapeHtml(vehicle.model)}</span>
            ${vehicle.isDefault ? '<span class="status closed">Padrão</span>' : ""}
          </div>
          <div class="item-meta">${escapeHtml(vehicle.notes || "Sem observações")}</div>
          <div class="item-actions">
            <button class="secondary" type="button" onclick="editVehicle('${vehicle.id}')">Editar</button>
            <button class="danger" type="button" onclick="deleteVehicle('${vehicle.id}')">Excluir</button>
          </div>
        </article>
      `
    )
    .join("");
}

function renderOpenTrip() {
  const openTrip = getOpenTrip();
  if (!openTrip) {
    els.openTripBox.innerHTML = "Nenhuma viagem aberta.";
    return;
  }

  const vehicle = getVehicle(openTrip.vehicleId);
  els.openTripBox.innerHTML = `
    <div><strong>${escapeHtml(vehicleLabel(vehicle))}</strong></div>
    <div>${escapeHtml(openTrip.origin)} → ${escapeHtml(openTrip.destination)}</div>
    <div>Saída: ${formatDisplayDate(openTrip.date)} às ${openTrip.departureTime}</div>
    <div>Km inicial: ${openTrip.initialKm}</div>
  `;
}

function renderFuelRecords() {
  const rows = getFilteredFuelRecords();

  if (!rows.length) {
    els.fuelList.innerHTML = '<div class="empty">Nenhum abastecimento no filtro selecionado.</div>';
    return;
  }

  els.fuelList.innerHTML = rows
    .map((record) => {
      const vehicle = getVehicle(record.vehicleId);
      return `
        <article class="item">
          <div class="item-title">
            <span>${formatDisplayDate(record.date)} · ${escapeHtml(vehicleLabel(vehicle))}</span>
            <span class="status closed">${escapeHtml(record.fuelType || "Combustível")}</span>
          </div>
          <div class="item-meta">
            Km: ${record.odometerKm}<br />
            Litros: ${formatNumber(record.liters)}<br />
            Valor: ${formatCurrency(record.totalAmount)}<br />
            Posto: ${escapeHtml(record.station || "Não informado")}
          </div>
          <div class="item-actions single">
            <button class="danger" type="button" onclick="deleteFuelRecord('${record.id}')">Excluir</button>
          </div>
        </article>
      `;
    })
    .join("");
}

function deleteFuelRecord(id) {
  state.fuelRecords = state.fuelRecords.filter((record) => record.id !== id);
  saveState();
  renderAll();
  toast("Abastecimento excluído.");
}

function renderTrips() {
  const trips = getFilteredTrips();
  if (!trips.length) {
    els.tripList.innerHTML = '<div class="empty">Nenhuma viagem no filtro selecionado.</div>';
    return;
  }

  els.tripList.innerHTML = trips
    .map((trip) => {
      const vehicle = getVehicle(trip.vehicleId);
      return `
        <article class="item">
          <div class="item-title">
            <span>${formatDisplayDate(trip.date)} · ${escapeHtml(vehicleLabel(vehicle))}</span>
            <span class="status ${trip.status === "open" ? "open" : "closed"}">
              ${trip.status === "open" ? "Aberta" : "Finalizada"}
            </span>
          </div>
          <div class="item-meta">
            Destino: ${escapeHtml(trip.destination)}<br />
            Finalidade: ${escapeHtml(trip.purpose)}<br />
            Saída: ${formatDisplayDate(trip.date)} às ${escapeHtml(trip.departureTime || "")}<br />
            ${trip.status === "closed" ? `Chegada: ${formatDisplayDate(trip.arrivalDate || trip.date)} às ${escapeHtml(trip.arrivalTime || "")}<br />` : ""}
            Km rodado: ${trip.distanceKm ?? "pendente"}
          </div>
          <div class="item-actions">
            <button class="secondary" type="button" onclick="editTrip('${trip.id}')">Editar</button>
            <button class="danger" type="button" onclick="deleteTrip('${trip.id}')">Excluir</button>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderReport() {
  const trips = getFilteredTrips();
  const fuelRecords = getFilteredFuelRecords();
  const closedTrips = trips.filter((trip) => trip.status === "closed");
  const totalKm = closedTrips.reduce((sum, trip) => sum + Number(trip.distanceKm || 0), 0);
  const totalLiters = fuelRecords.reduce((sum, record) => sum + Number(record.liters || 0), 0);
  const totalFuelAmount = fuelRecords.reduce((sum, record) => sum + Number(record.totalAmount || 0), 0);
  const defaultVehicle = getVehicle(getDefaultVehicleId()) || state.vehicles[0];
  const month = monthNames[Number(els.monthFilter.value) - 1];
  const year = els.yearFilter.value;

  els.homeSummary.textContent = `${closedTrips.length} viagens finalizadas · ${totalKm} km rodados · ${formatNumber(totalLiters)} litros em ${month}/${year}.`;

  const tripCards = trips
    .map(
      (trip) => `
        <div class="report-card">
          ${formatDisplayDate(trip.date)} - ${escapeHtml(trip.origin)} para ${escapeHtml(trip.destination)}<br />
          ${escapeHtml(trip.purpose)} · ${trip.distanceKm ?? "pendente"} km · ${trip.status === "open" ? "aberta" : "finalizada"}
        </div>
      `
    )
    .join("");

  const fuelCards = fuelRecords
    .map((record) => {
      const vehicle = getVehicle(record.vehicleId);
      return `
        <div class="report-card">
          ${formatDisplayDate(record.date)} - ${escapeHtml(vehicleLabel(vehicle))}<br />
          ${formatNumber(record.liters)} litros · ${formatCurrency(record.totalAmount)} · km ${record.odometerKm}
        </div>
      `;
    })
    .join("");

  els.monthlyReport.innerHTML = `
    <div class="report-card">
      <strong>Motorista:</strong> ${escapeHtml(state.settings.driverName || "Não informado")}<br />
      <strong>Unidade:</strong> ${escapeHtml(state.settings.unit || "Não informada")}<br />
      <strong>Gestor:</strong> ${escapeHtml(state.settings.managerName || "Opcional")}<br />
      <strong>Veículo:</strong> ${escapeHtml(defaultVehicle?.model || state.settings.defaultVehicleName || "Não informado")}<br />
      <strong>Placa:</strong> ${escapeHtml(defaultVehicle?.plate || state.settings.defaultPlate || "Não informada")}<br />
      <strong>Mês de referência:</strong> ${month}/${year}<br />
      <strong>Total de viagens:</strong> ${closedTrips.length}<br />
      <strong>Total de km rodado:</strong> ${totalKm}<br />
      <strong>Total abastecido:</strong> ${formatNumber(totalLiters)} litros<br />
      <strong>Total gasto:</strong> ${formatCurrency(totalFuelAmount)}
    </div>
    ${tripCards}
    ${fuelRecords.length ? '<div class="report-card"><strong>Abastecimentos</strong></div>' : ""}
    ${fuelCards}
  `;
}

function copyWhatsAppText() {
  const text = buildWhatsAppText();

  if (navigator.clipboard?.writeText) {
    navigator.clipboard
      .writeText(text)
      .then(() => toast("Texto copiado para WhatsApp."))
      .catch(() => window.prompt("Copie o texto:", text));
    return;
  }

  window.prompt("Copie o texto:", text);
}

function buildWhatsAppText() {
  const trips = getFilteredTrips();
  const fuelRecords = getFilteredFuelRecords();
  const closedTrips = trips.filter((trip) => trip.status === "closed");
  const totalKm = closedTrips.reduce((sum, trip) => sum + Number(trip.distanceKm || 0), 0);
  const totalLiters = fuelRecords.reduce((sum, record) => sum + Number(record.liters || 0), 0);
  const totalFuelAmount = fuelRecords.reduce((sum, record) => sum + Number(record.totalAmount || 0), 0);
  const month = monthNames[Number(els.monthFilter.value) - 1];
  const year = els.yearFilter.value;
  const defaultVehicle = getVehicle(getDefaultVehicleId()) || state.vehicles[0];
  const lines = [
    "*Diário de Bordo*",
    `Motorista: ${state.settings.driverName || "Não informado"}`,
    `Unidade: ${state.settings.unit || "Não informada"}`,
    `Gestor: ${state.settings.managerName || "Não informado"}`,
    `Veículo: ${defaultVehicle?.model || state.settings.defaultVehicleName || "Não informado"}`,
    `Placa: ${defaultVehicle?.plate || state.settings.defaultPlate || "Não informada"}`,
    `Mês: ${month}/${year}`,
    `Total de viagens: ${closedTrips.length}`,
    `Total de km rodado: ${totalKm}`,
    `Total abastecido: ${formatNumber(totalLiters)} litros`,
    `Total gasto: ${formatCurrency(totalFuelAmount)}`,
    "",
    "*Deslocamentos*"
  ];

  trips.forEach((trip) => {
    lines.push(
      `- ${formatDisplayDate(trip.date)} | ${trip.origin} → ${trip.destination} | ${trip.purpose} | ${trip.distanceKm ?? "pendente"} km | ${trip.status === "open" ? "aberta" : "finalizada"}`
    );
  });

  if (fuelRecords.length) {
    lines.push("", "*Abastecimentos*");
    fuelRecords.forEach((record) => {
      const vehicle = getVehicle(record.vehicleId);
      lines.push(
        `- ${formatDisplayDate(record.date)} | ${vehicleLabel(vehicle)} | ${formatNumber(record.liters)} L | ${formatCurrency(record.totalAmount)} | km ${record.odometerKm}`
      );
    });
  }

  return lines.join("\n");
}

function exportCsv() {
  const tripRows = getFilteredTrips();
  const fuelRows = getFilteredFuelRecords();
  const header = [
    "tipo",
    "data",
    "hora_saida",
    "hora_chegada",
    "veiculo",
    "placa",
    "km_inicial",
    "km_final",
    "km_rodado",
    "origem",
    "destino_ou_posto",
    "finalidade_ou_abastecimento",
    "status",
    "observacoes"
  ];
  const lines = tripRows.map((trip) => {
    const vehicle = getVehicle(trip.vehicleId);
    return [
      "viagem",
      trip.date,
      trip.departureTime,
      trip.arrivalTime,
      vehicle?.model || "",
      vehicle?.plate || "",
      trip.initialKm,
      trip.finalKm ?? "",
      trip.distanceKm ?? "",
      trip.origin,
      trip.destination,
      trip.purpose,
      trip.status,
      [trip.notes, trip.arrivalNotes].filter(Boolean).join(" | ")
    ]
      .map(csvCell)
      .join(",");
  });

  fuelRows.forEach((record) => {
    const vehicle = getVehicle(record.vehicleId);
    lines.push(
      [
        "abastecimento",
        record.date,
        record.time,
        "",
        vehicle?.model || "",
        vehicle?.plate || "",
        record.odometerKm,
        "",
        "",
        "",
        record.station,
        `${record.fuelType} - ${formatNumber(record.liters)} L - ${formatCurrency(record.totalAmount)}`,
        "finalizado",
        record.notes || ""
      ]
        .map(csvCell)
        .join(",")
    );
  });

  downloadFile(`diario-bordo-${els.monthFilter.value}-${els.yearFilter.value}.csv`, [header.join(","), ...lines].join("\n"), "text/csv");
}
function exportPdf() {
  const trips = getFilteredTrips();
  const fuelRecords = getFilteredFuelRecords();
  const month = monthNames[Number(els.monthFilter.value) - 1];
  const year = els.yearFilter.value;
  const defaultVehicle = getVehicle(getDefaultVehicleId()) || state.vehicles[0];
  const totalKm = trips.filter((trip) => trip.status === "closed").reduce((sum, trip) => sum + Number(trip.distanceKm || 0), 0);
  const totalLiters = fuelRecords.reduce((sum, record) => sum + Number(record.liters || 0), 0);
  const logoSrc = document.querySelector(".hero-logo")?.src || "icons/logo.png";

  const tripRows = trips.map((trip) => {
    const vehicle = getVehicle(trip.vehicleId);
    const fuel = fuelRecords.find((record) => record.vehicleId === trip.vehicleId && record.date === trip.date);
    return `<tr><td>${escapeHtml(formatDisplayDate(trip.date))}</td><td>${escapeHtml(vehicle?.plate || "")}</td><td>${escapeHtml(vehicle?.model || "")}</td><td>${escapeHtml(state.settings.driverName || "")}</td><td>${escapeHtml(trip.departureTime || "")}</td><td>${escapeHtml(trip.initialKm ?? "")}</td><td>${escapeHtml(trip.destination || "")}</td><td>${escapeHtml(trip.arrivalTime || "")}</td><td>${escapeHtml(trip.finalKm ?? "")}</td><td>${escapeHtml(trip.distanceKm ?? "")}</td><td>${escapeHtml(fuel ? `${fuel.fuelType} - ${formatNumber(fuel.liters)} L` : "")}</td></tr>`;
  }).join("");

  const fuelRows = fuelRecords.map((record) => {
    const vehicle = getVehicle(record.vehicleId);
    return `<tr><td>${escapeHtml(formatDisplayDate(record.date))}</td><td>${escapeHtml(vehicle?.plate || "")}</td><td>${escapeHtml(vehicle?.model || "")}</td><td>${escapeHtml(record.fuelType || "")}</td><td>${escapeHtml(formatNumber(record.liters))}</td><td>${escapeHtml(formatCurrency(record.totalAmount))}</td><td>${escapeHtml(record.odometerKm)}</td><td>${escapeHtml(record.station || "")}</td></tr>`;
  }).join("");

  const printable = `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8" /><title>Diário de Bordo - ${month}/${year}</title><style>@page{size:A4 landscape;margin:12mm}*{box-sizing:border-box}body{margin:0;color:#1f2f38;font-family:Arial,Helvetica,sans-serif;font-size:11px}.top{display:grid;grid-template-columns:1fr 2fr;gap:12px;align-items:center;border-bottom:3px solid #07843f;padding-bottom:8px;margin-bottom:10px}.logo{width:100%;max-height:58px;object-fit:contain;object-position:left center}h1{margin:0;color:#1f2f38;font-size:22px;text-align:right}.info{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin:10px 0}.box{border:1px solid #24323a;min-height:34px;padding:5px}.label{display:block;color:#52636b;font-size:9px;font-weight:700;text-transform:uppercase}table{width:100%;border-collapse:collapse;margin-top:8px}th,td{border:1px solid #24323a;padding:4px;vertical-align:top}th{background:#e8f7ee;color:#14532d;font-size:9px;text-transform:uppercase}.section-title{margin:14px 0 4px;color:#14532d;font-size:13px;font-weight:800;text-transform:uppercase}.signature{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:28px}.line{border-top:1px solid #24323a;padding-top:4px;text-align:center}.no-print{margin-top:20px;padding:10px 14px}@media print{.no-print{display:none}}</style></head><body><div class="top"><img class="logo" src="${escapeHtml(logoSrc)}" alt="Diário de Bordo" /><div><h1>Controle de uso do veículo</h1></div></div><div class="info"><div class="box"><span class="label">Motorista</span>${escapeHtml(state.settings.driverName || "Não informado")}</div><div class="box"><span class="label">Unidade/escritório</span>${escapeHtml(state.settings.unit || "Não informado")}</div><div class="box"><span class="label">Veículo</span>${escapeHtml(defaultVehicle?.model || state.settings.defaultVehicleName || "Não informado")}</div><div class="box"><span class="label">Placa</span>${escapeHtml(defaultVehicle?.plate || state.settings.defaultPlate || "Não informada")}</div><div class="box"><span class="label">Mês de referência</span>${month}/${year}</div><div class="box"><span class="label">Total de viagens</span>${trips.length}</div><div class="box"><span class="label">Total de km rodado</span>${totalKm}</div><div class="box"><span class="label">Total abastecido</span>${formatNumber(totalLiters)} L</div></div><div class="section-title">Deslocamentos</div><table><thead><tr><th>Data</th><th>Placa</th><th>Veículo</th><th>Nome</th><th>Hora saída</th><th>Km saída</th><th>Destino</th><th>Hora chegada</th><th>Km chegada</th><th>Km rodado</th><th>Combustível</th></tr></thead><tbody>${tripRows || '<tr><td colspan="11">Nenhum deslocamento no período.</td></tr>'}</tbody></table><div class="section-title">Abastecimentos</div><table><thead><tr><th>Data</th><th>Placa</th><th>Veículo</th><th>Combustível</th><th>Litros</th><th>Valor</th><th>Km</th><th>Posto</th></tr></thead><tbody>${fuelRows || '<tr><td colspan="8">Nenhum abastecimento no período.</td></tr>'}</tbody></table><div class="signature"><div class="line">Assinatura do motorista</div><div class="line">Assinatura do gestor</div></div><button class="no-print" onclick="window.print()">Imprimir / salvar PDF</button></body></html>`;

  const printWindow = window.open("", "_blank");
  if (!printWindow) {
    toast("Permita pop-ups para gerar o PDF.");
    return;
  }
  printWindow.document.write(printable);
  printWindow.document.close();
  printWindow.focus();
  setTimeout(() => printWindow.print(), 300);
}
function exportBackup() {
  downloadFile(`backup-diario-bordo-${new Date().toISOString().slice(0, 10)}.json`, JSON.stringify(state, null, 2), "application/json");
}

function importBackup(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const imported = JSON.parse(String(reader.result));
      if (!imported.settings || !Array.isArray(imported.vehicles) || !Array.isArray(imported.trips)) {
        throw new Error("Formato inválido.");
      }
      state = normalizeState(imported);
      saveState();
      fillSettingsForm();
      renderAll();
      toast("Backup importado.");
    } catch {
      toast("Arquivo de backup inválido.");
    } finally {
      event.target.value = "";
    }
  };
  reader.readAsText(file);
}

function refreshAutomaticFields(force = false) {
  const now = new Date();
  const today = formatDateInput(now);
  const time = formatTime(now);
  if (force || !els.departureForm.elements.date.value) els.departureForm.elements.date.value = today;
  if (force || !els.departureForm.elements.departureTime.value) els.departureForm.elements.departureTime.value = time;
  if (force || !els.arrivalForm.elements.arrivalDate.value) els.arrivalForm.elements.arrivalDate.value = today;
  if (force || !els.arrivalForm.elements.arrivalTime.value) els.arrivalForm.elements.arrivalTime.value = time;
  if (force || !els.fuelForm.elements.date.value) els.fuelForm.elements.date.value = formatDisplayDate(today);
  if (force || !els.fuelForm.elements.time.value) els.fuelForm.elements.time.value = time;
}

function getFilteredTrips() {
  const month = Number(els.monthFilter.value);
  const year = Number(els.yearFilter.value);
  return state.trips
    .filter((trip) => {
      const [tripYear, tripMonth] = trip.date.split("-").map(Number);
      return tripYear === year && tripMonth === month;
    })
    .sort((a, b) => `${b.date}${b.departureTime}`.localeCompare(`${a.date}${a.departureTime}`));
}

function getFilteredFuelRecords() {
  const month = Number(els.monthFilter.value);
  const year = Number(els.yearFilter.value);
  return state.fuelRecords
    .filter((record) => {
      const [recordYear, recordMonth] = record.date.split("-").map(Number);
      return recordYear === year && recordMonth === month;
    })
    .sort((a, b) => `${b.date}${b.time}`.localeCompare(`${a.date}${a.time}`));
}

function getOpenTrip() {
  return state.trips.find((trip) => trip.status === "open");
}

function getVehicle(id) {
  return state.vehicles.find((vehicle) => vehicle.id === id);
}

function getDefaultVehicleId() {
  const byFlag = state.vehicles.find((vehicle) => vehicle.isDefault);
  if (byFlag) return byFlag.id;
  const byPlate = state.vehicles.find((vehicle) => vehicle.plate === normalizePlate(state.settings.defaultPlate));
  return byPlate?.id || "";
}

function getLastFinalKm(vehicleId) {
  const trips = state.trips
    .filter((trip) => trip.vehicleId === vehicleId && trip.finalKm !== null)
    .sort((a, b) => `${b.date}${b.arrivalTime || b.departureTime}`.localeCompare(`${a.date}${a.arrivalTime || a.departureTime}`));
  return trips.length ? Number(trips[0].finalKm) : null;
}

function tripTitle(trip) {
  return `${formatDisplayDate(trip.date)} - ${vehicleLabel(getVehicle(trip.vehicleId))} - ${trip.destination}`;
}

function vehicleLabel(vehicle) {
  return vehicle ? `${vehicle.plate} - ${vehicle.model}` : "Veículo removido";
}

function createId() {
  return globalThis.crypto?.randomUUID
    ? globalThis.crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function formToObject(form) {
  return Object.fromEntries(new FormData(form).entries());
}

function loadState() {
  try {
    return normalizeState(JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"));
  } catch {
    return normalizeState({});
  }
}

function normalizeState(data) {
  return {
    settings: { ...defaultState.settings, ...(data.settings || {}) },
    vehicles: Array.isArray(data.vehicles) ? data.vehicles : [],
    trips: Array.isArray(data.trips) ? data.trips : [],
    fuelRecords: Array.isArray(data.fuelRecords) ? data.fuelRecords : []
  };
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function formatDateInput(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatTime(date) {
  return date.toTimeString().slice(0, 5);
}

function formatDisplayDate(dateText) {
  const [year, month, day] = dateText.split("-");
  return `${day}/${month}/${year}`;
}

function normalizePlate(plate) {
  return String(plate || "").trim().toUpperCase();
}

function csvCell(value) {
  return `"${String(value).replaceAll('"', '""')}"`;
}

function formatNumber(value) {
  return Number(value || 0).toLocaleString("pt-BR", {
    minimumFractionDigits: Number(value) % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2
  });
}

function formatCurrencyInput(event) {
  const input = event.currentTarget;
  const digits = input.value.replace(/\D/g, "");
  input.value = digits ? formatCurrency(Number(digits) / 100) : "";
}

function pasteCurrencyInput(event) {
  const value = event.clipboardData?.getData("text");
  const amount = parsePastedCurrency(value);
  if (!Number.isFinite(amount) || amount < 0) return;
  event.preventDefault();
  event.currentTarget.value = formatCurrency(amount);
}

function formatCurrency(value) {
  return Number(value || 0).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function parsePastedCurrency(value) {
  const cleaned = String(value || "").replace(/[^\d,.-]/g, "");
  if (!cleaned) return NaN;
  const normalized = cleaned.includes(",")
    ? cleaned.replace(/\./g, "").replace(",", ".")
    : cleaned;
  return Number(normalized);
}

function parseCurrency(value) {
  const digits = String(value || "").replace(/\D/g, "");
  return digits ? Number(digits) / 100 : 0;
}

function downloadFile(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function toast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("show");
  window.clearTimeout(toast.timer);
  toast.timer = window.setTimeout(() => els.toast.classList.remove("show"), 2600);
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js");
  }
}

window.editVehicle = editVehicle;
window.deleteVehicle = deleteVehicle;
window.editTrip = editTrip;
window.deleteTrip = deleteTrip;
window.deleteFuelRecord = deleteFuelRecord;







