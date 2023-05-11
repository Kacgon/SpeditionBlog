import { FirstPost } from '../components/FirstPost'
import SearchBar from '../components/Searchbar'
import "../main.css"
import Signin from '../components/SignIn'
import SmallPostsApi from '../APIcalls/SmallPostsApi'
import CategoriesApi from '../APIcalls/CategoriesApi'
import AuthorsApi from '../components/Authors'
import TagsApi from '../components/Tags'
import { Routes } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import { Navbar } from '../components/Navbar'

function Page1() {
  return (
    <> 
    <Grid className='AppFullContainer2' container lg={12}>
      <Grid container lg={8} xs={12}>
      <Grid item lg={12}>
          <div className='FirstPost'> <FirstPost userId={''} id={0} title={''} body={''} /></div>
      </Grid>
      <Grid item xs={12}>
          <div className='SingleSmallPost'><SmallPostsApi />
          </div>
          <div className='NavbarStyle'><Navbar></Navbar>
          </div>
      </Grid>
      </Grid>
      <Grid item lg={3} xs={12}>
      <div className='featury'>
      <div className='searchBar'><SearchBar /></div>
      <div className='Categories' ><CategoriesApi /></div>  
      <div className='SignInNewsletter'><Signin /></div>
      <div className='Authors'><AuthorsApi /></div>
      <div className='Tags'><TagsApi/></div>
      </div>
     </Grid>    
    </Grid>
 
    </>
  )
}

export default Page1
