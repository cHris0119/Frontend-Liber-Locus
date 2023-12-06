import React, { useEffect, useRef } from 'react'
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  Pagination
} from '@nextui-org/react'
import { VerticalDotsIcon } from './VerticalDotsIcon'
import { columns, statusOptions } from './data'
import booksApi from '../../../api/booksApi'

const statusColorMap = {
  APPROVED: 'success',
  INPROCCES: 'danger',
  CANCELED: 'warning'
}

const INITIAL_VISIBLE_COLUMNS = ['vendedor', 'libro', 'estado', 'actions', 'precio', 'comprador']

export const TableContador = ({ data }) => {
  const [dataUrl, setDataUrl] = React.useState('')
  const formRef = useRef()
  const [dataToken, setDataToken] = React.useState('')
  const [filterValue] = React.useState('')
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([]))
  const [visibleColumns] = React.useState(new Set(INITIAL_VISIBLE_COLUMNS))
  const [statusFilter] = React.useState('all')
  const [rowsPerPage] = React.useState(5)
  const [sortDescriptor, setSortDescriptor] = React.useState({
    column: 'comprador',
    direction: 'ascending'
  })
  useEffect(() => {
    if (dataUrl && dataToken) {
      formRef.current.submit()
    }
  }, [dataUrl, dataToken])

  const handlePay = async (id, monto, ordenCompra) => {
    try {
      const numericStr = monto.replace(/[^0-9]/g, '')
      const numericValue = parseInt(numericStr, 10)

      console.log(id, monto, ordenCompra)
      const response = await booksApi.post('api/transbank/iniciar_pago_contador/', {
        monto: numericValue,
        orden_compra: ordenCompra,
        user_id: id
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })

      setDataToken(response.data.token)
      setDataUrl(response.data.url)

      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  const [page, setPage] = React.useState(1)

  const hasSearchFilter = Boolean(filterValue)

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === 'all') return columns

    return columns.filter((column) => Array.from(visibleColumns).includes(column.uid))
  }, [visibleColumns])

  const filteredItems = React.useMemo(() => {
    let filteredUsers = [...data]

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) =>
        user.name.toLowerCase().includes(filterValue.toLowerCase())
      )
    }
    if (statusFilter !== 'all' && Array.from(statusFilter).length !== statusOptions.length) {
      filteredUsers = filteredUsers.filter((user) =>
        Array.from(statusFilter).includes(user.status)
      )
    }

    return filteredUsers
  }, [data, filterValue, statusFilter])

  const pages = Math.ceil(filteredItems.length / rowsPerPage)

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage
    const end = start + rowsPerPage

    return filteredItems.slice(start, end)
  }, [page, filteredItems, rowsPerPage])

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a, b) => {
      const first = a[sortDescriptor.column]
      const second = b[sortDescriptor.column]
      const cmp = first < second ? -1 : first > second ? 1 : 0

      return sortDescriptor.direction === 'descending' ? -cmp : cmp
    })
  }, [sortDescriptor, items])

  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey]
    switch (columnKey) {
      case 'estado':
        return (
          <Chip className="capitalize" color={statusColorMap[user.estado]} size="sm" variant="flat">
            {cellValue}
          </Chip>
        )
      case 'actions':
        return (
          <div className="relative flex items-center gap-2">
                {user.estado !== 'CANCELADO' || user.estado !== 'FINALIZADO'
                  ? <Dropdown>
                    <DropdownTrigger>
                      <Button isIconOnly size="md" variant="ghost">
                        <VerticalDotsIcon className="text-xl text-gray-900" />
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu>
                            {user.estado === 'PRODUCTO ENTREGADO'
                              ? <DropdownItem onClick={() => handlePay(user.idSeller, user.precio, user.id)}>Ir al pago</DropdownItem>
                              : null
                            }
                            <DropdownItem>Cancelar</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                  : 'Sin acciones que mostrar'}
          </div>
        )
      default:
        return cellValue
    }
  }, [])

  const onNextPage = React.useCallback(() => {
    if (page < pages) {
      setPage(page + 1)
    }
  }, [page, pages])

  const onPreviousPage = React.useCallback(() => {
    if (page > 1) {
      setPage(page - 1)
    }
  }, [page])

  const bottomContent = React.useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">

        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          page={page}
          total={pages}
          onChange={setPage}
        />
        <div className="hidden sm:flex w-[30%] justify-end gap-2">
          <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onPreviousPage}>
            Previous
          </Button>
          <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onNextPage}>
            Next
          </Button>
        </div>
      </div>
    )
  }, [selectedKeys, items.length, page, pages, hasSearchFilter])

  return (
    <>
    <Table
      aria-label="Example table with custom cells, pagination and sorting"
      isHeaderSticky
      bottomContent={bottomContent}
      bottomContentPlacement="outside"
      classNames={{
        wrapper: 'max-h-[382px]'
      }}
      selectedKeys={selectedKeys}
      sortDescriptor={sortDescriptor}
      topContentPlacement="outside"
      onSelectionChange={setSelectedKeys}
      onSortChange={setSortDescriptor}
      >
      <TableHeader columns={headerColumns}>
        {(column) => (
          <TableColumn
          key={column.uid}
          align={column.uid === 'actions' ? 'center' : 'start'}
          allowsSorting={column.sortable}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={'No users found'} items={sortedItems}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell className='text-lg'>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>

    </Table>
    { dataUrl && dataToken
      ? (
              <form
              style={{ display: 'none' }}
              ref={formRef}
              method="post"
              action={dataUrl}>
              <input type="hidden" name="token_ws" value={dataToken} />
              <input type="submit" value="Ir a pagar" />
              </form>
        )
      : null
            }
        </>
  )
}
