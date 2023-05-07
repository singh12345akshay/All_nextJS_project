import React from 'react'
import TableComponent from '@/components/tableComponent/tableComponent'
import SideBarComponent from '@/components/sideBar/sideBarComponent'
import store from '@/store/store'
import { Provider } from 'react-redux'

export default function dessert() {
  return (
   <>
    <Provider store={store}>
        <SideBarComponent>
          <TableComponent />
        </SideBarComponent>
      </Provider>
      </>
  )
}
