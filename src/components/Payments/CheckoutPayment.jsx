import React, { useEffect } from 'react'
import { Container, Flex } from '@chakra-ui/react'
import Details from './CheckoutComponent/Details'
import Cart from './CheckoutComponent/Cart'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUserPsychologistDetailsCli, getUserPsychologistDetails } from '../../redux/actions'
import Loader from '../Loader/Loader'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from "@stripe/stripe-js";
const PUBLIC_KEY = 'pk_test_51Mi3c7DX8XlPJvtBRNkYk9VX2cjgJBtAgpmN51ofqw027eAeHMwl9KPqXBiQGJp7L2yVCCriOxZRTfgH2GDk8zKx00B8BEuZ5J'
const stripeTestPromise = loadStripe(PUBLIC_KEY);

function CheckoutPayment() {
  const baseURL = process.env.REACT_APP_API;
  const dispatch = useDispatch();
  const { idPsychologist } = useParams()

  const tokenClient = window.localStorage.getItem('tokenClient')
  const tokenPsychologist = window.localStorage.getItem('tokenPsychologist')

  useEffect(() => {
    tokenClient
      ? dispatch(getUserPsychologistDetailsCli(idPsychologist))
      : dispatch(getUserPsychologistDetails(idPsychologist))
  }, [dispatch]);

  const psyDetails = useSelector((state) => state.userPsichologistDetail)

  let arr = Object.values(psyDetails);

  return (
    <Container maxW={'container.xl'} p={0}> {
      arr.length <= 1 ? <Loader></Loader> : <Elements stripe={stripeTestPromise}>
        <Flex py={20} >
          <Details idPsy={idPsychologist} />
          <Cart name={psyDetails.firstName} last={psyDetails.lastName}
            pic={`${baseURL}/${psyDetails.profileImage}`}/>
        </Flex>
      </Elements>
    }
    </Container>
  )
}

export default CheckoutPayment