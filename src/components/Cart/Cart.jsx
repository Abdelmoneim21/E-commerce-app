import { useDispatch, useSelector } from "react-redux"
import { deleteFromCart } from "../../redux-toolkit/Cart-slice"
import { Table } from "flowbite-react"

export default function Cart(){
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()

    return(
        <>
            <div className="overflow-x-auto h-[50vh]">
      <Table>
        <Table.Head>
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
        {cart.map((product) => (
            <Table.Row key={product.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {product.title}
                </Table.Cell>
                <Table.Cell>{product.category.name}</Table.Cell>
                <Table.Cell>${product.price}</Table.Cell>
                <Table.Cell>
                <button onClick={()=>{dispatch(deleteFromCart(product))}} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                    Delete
                </button>
                </Table.Cell>
            </Table.Row>
))}

        </Table.Body>
      </Table>
    </div>
        </>
    )
}