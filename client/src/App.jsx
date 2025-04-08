import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/student/Home'
import CoursesList from './pages/student/CoursesList'
import CourseDetails from './pages/student/CourseDetails'
import MyEnrollments from './pages/student/MyEnrollments'
import Player from './pages/student/Player'
import Loading from './components/student/Loading'
import Educator from './pages/educator/Educator'
import Dashboard from './pages/educator/Dashboard'
import AddCourse from './pages/educator/AddCourse'
import MyCourses from './pages/educator/MyCourses'
import StudentsEnrolled from './pages/educator/StudentsEnrolled'
import LayoutWithNavbar from './LayoutWithNavbar.jsx'
import "quill/dist/quill.snow.css";

const App = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL || '';
  return (
    <Routes>
      <Route element={<LayoutWithNavbar />}>
        <Route path={`${baseUrl}`} element={<Home />} />
        <Route path={`${baseUrl}/course-list`} element={<CoursesList />} />
        <Route path={`${baseUrl}/course-list/:input`} element={<CoursesList />}/>
        <Route path={`${baseUrl}/course/:id`} element={<CourseDetails />}/>
        <Route path={`${baseUrl}/my-enrollments`} element={<MyEnrollments />}/>
        <Route path={`${baseUrl}/player/:courseId`} element={<Player />}/>
        <Route path={`${baseUrl}/loading/:path`} element={<Loading />}/>
      </Route>

      <Route path={`${baseUrl}/educator`} element={<Educator />}>
        <Route index element={<Dashboard />} />
        {/* <Route path='educator' element={<Dashboard/>}/> */}
        <Route path='add-courses' element={<AddCourse/>}/>
        <Route path='my-courses' element={<MyCourses/>}/>
        <Route path='student-enrolled' element={<StudentsEnrolled/>}/>
      </Route>
    </Routes>
  )
}

export default App
