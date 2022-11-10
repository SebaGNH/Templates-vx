// ** React Imports
import { Fragment, useState } from 'react'

// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  Label,
  Input,
  Modal,
  Button,
  CardBody,
  CardText,
  CardTitle,
  ModalBody,
  ModalHeader,
  FormFeedback
} from 'reactstrap'

// ** Third Party Components
import Select from 'react-select'
import { useForm, Controller } from 'react-hook-form'
import { Home, Check, X, Briefcase, PhoneCall} from 'react-feather'

// ** Utils
import { selectThemeColors } from '@utils'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'

const defaultValues = {
  lastName: '',
  firstName: ''
}

const countryOptions = [
  { value: 'ar', label: 'Argentina' },
  { value: 'usa', label: 'USA' },
  { value: 'france', label: 'France' },
  { value: 'russia', label: 'Russia' },
  { value: 'canada', label: 'Canada' }
]

const V05_modal_test = () => {
  // ** States
  const [show, setShow] = useState(false)

  // ** Hooks
  const {
    reset,
    control,
    setError,
    clearErrors,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues })

  const onSubmit = data => {
    //console.log("Botón Submit Pulsado");
    if (Object.values(data).every(field => field.length > 0)) {
      setShow(false)
      reset()
    } else {
      setError('firstName', {
        type: 'manual'
      })
    }
  }

  const onDiscard = () => {
    clearErrors()
    setShow(false)
    reset()
  }

  return (
    <Fragment>
      <Card>
        <CardBody className='text-center'>

          <PhoneCall className='font-large-3 mb-1' />
          <CardTitle tag='h5'>Card con Ventana</CardTitle>
          <CardText>Card Text Lorem ipsu</CardText>

          <Button outline color='info' className='round'  onClick={() => setShow(true)}>
            <Briefcase size={18} />
            <span className='align-middle ms-1'>
              Mostrar Ventana Modal
            </span>
          </Button>

        </CardBody>        
      </Card>

      <Modal
        isOpen={show}
        onClosed={onDiscard}
        toggle={() => setShow(!show)}
        className='modal-dialog-centered modal-md'
      >
        <ModalHeader className='bg-transparent' toggle={() => setShow(!show)}></ModalHeader>
        <ModalBody className='pb-5 px-sm-4 mx-50'>
          <h1 className='address-title text-center mb-1'> Titulo H1</h1>
          <p className='address-subtitle text-center mb-2 pb-75'> Parrafo</p>
          <Row tag='form' className='gy-1 gx-2' onSubmit={handleSubmit(onSubmit)}>

            <Col xs={12} md={12}>
              <Label className='form-label' for='firstName'>
                Nombre
              </Label>
              <Controller
                name='firstName'
                control={control}
                render={({ field }) => (
                  <Input id='firstName' placeholder='Canelo' invalid={errors.firstName && true} {...field} />
                )}
              />
              {errors.firstName && <FormFeedback>Please enter a valid First Name</FormFeedback>}
            </Col>

            <Col xs={12}>
              <Label className='form-label' for='country'>
                País
              </Label>
              <Select
                id='country'
                isClearable={false}
                className='react-select'
                classNamePrefix='select'
                options={countryOptions}
                theme={selectThemeColors}
                defaultValue={countryOptions[0]}
              />
            </Col>


            <Col xs={12}>
              <Label className='form-label' for='town'>
                Ciudad
              </Label>
              <Input id='town' placeholder='Córdoba' />
            </Col>


            <Col className='text-center mt-4' xs={12}>
              <Button type='submit' className='me-4' color='primary' outline >
                Submit
              </Button>
              <Button type='reset' className='' color='secondary' outline onClick={onDiscard}>
                Discard
              </Button>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </Fragment>
  )
}

export default V05_modal_test
