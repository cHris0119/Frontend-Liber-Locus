const columns = [
  { name: 'ID', uid: 'id', sortable: false },
  { name: 'VENDEDOR', uid: 'vendedor', sortable: false },
  { name: 'COMPRADOR', uid: 'comprador', sortable: false },
  { name: 'LIBRO', uid: 'libro', sortable: false },
  { name: 'PRECIO', uid: 'precio' },
  { name: 'ESTADO', uid: 'estado', sortable: true },
  { name: 'ACCIONES', uid: 'actions' }
]

const statusOptions = [
  { name: 'CANCELED', uid: 'CANCELED' },
  { name: 'APPROVED', uid: 'APPROVED' },
  { name: 'IN PROCESS', uid: 'INPROCESS' }
]

export { columns, statusOptions }
