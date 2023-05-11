import "../main.css"
import Signin from '../components/SignIn'
import CategoriesApi from '../APIcalls/CategoriesApi'
import AuthorsApi from '../components/Authors'
import TagsApi from '../components/Tags'
import { Grid } from '@material-ui/core'
import { Navbar } from '../components/Navbar'
import { FirstPost4 } from './FirstPost4'
import SmallPostsApi4 from "./SmallPostsApi4"
import SearchBar4 from "./Searchbar4"

function Page4() {
  return (
    <> 
    <Grid className='AppFullContainer2' container lg={12}>
      <Grid container lg={8} xs={12}>
      <Grid item lg={12}>
          <div className='FirstPost'> <FirstPost4 userId={''} id={0} title={''} body={''} /></div>
      </Grid>
      <Grid item xs={12}>
          <div className='SingleSmallPost'><SmallPostsApi4 />
          </div>
          <div className='NavbarStyle'><Navbar></Navbar>
          </div>
      </Grid>
      </Grid>
      <Grid item lg={3} xs={12}>
      <div className='featury'>
      <div className='searchBar'><SearchBar4 /></div>
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

export default Page4
