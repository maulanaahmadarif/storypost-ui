import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow, CButton, CSelect, CInput } from '@coreui/react'
import CIcon from '@coreui/icons-react'

import usersData from './UsersData'

const User = ({match}) => {
  const user = usersData.find( user => user.id.toString() === match.params.id)
  const userDetails = user ? Object.entries(user) : 
    [['id', (<span><CIcon className="text-muted" name="cui-icon-ban" /> Not found</span>)]]

  return (
    
    <CRow>
      <CCol lg={6}>
        <CCard>
          <CCardHeader>
            User id: {match.params.id}
          </CCardHeader>
          <CCardBody>
            <table className="table table-striped table-hover">
              <tbody>
                <tr>
                  <td>Username</td>
                  <td>
                    <CInput id="text-input" name="text-input" placeholder="Text" value={user.username} />
                  </td>
                </tr>
                <tr>
                  <td>Nama</td>
                  <td>
                    <CInput id="text-input" name="text-input" placeholder="Text" value={user.name} />
                  </td>
                </tr>
                <tr>
                  <td>NIP</td>
                  <td>
                    <CInput id="text-input" name="text-input" placeholder="Text" value={user.nip} />
                  </td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>
                    <CInput id="text-input" name="text-input" placeholder="Text" value={user.email} />
                  </td>
                </tr>
                <tr>
                  <td>Account</td>
                  <td>
                    <CSelect custom size="sm" name="selectSm" id="SelectLm">
                      <option value="0">User</option>
                      <option value="1">Media</option>
                    </CSelect>
                  </td>
                </tr>
                <tr>
                  <td>Status</td>
                  <td>
                    <CSelect custom size="sm" name="selectSm" id="SelectLm">
                      <option value="0">Ban</option>
                      <option value="1">Active</option>
                      <option value="2">Suspend</option>
                    </CSelect>
                  </td>
                </tr>
              </tbody>
            </table>
            <div>
              <CButton type="submit" size="sm" color="primary">Update</CButton>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default User
