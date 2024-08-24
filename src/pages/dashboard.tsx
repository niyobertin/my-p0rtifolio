import Layout from "../components/common/layout";
import DashboardCartItem from "../components/common/dashboardCart";
import { FaBlog, FaUserGroup } from "react-icons/fa6";
import { FaQuestionCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import { fetchBlogs } from "../api/reducers/blogs";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../api/store";
import { fetchQuerries } from "../api/reducers/contact.us";
import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/api";
const Dashboard = () => {
    const dispatch: AppDispatch = useDispatch();
    const [users,setUsers] = useState([]);
    const { blogs, status, error } = useSelector((state: RootState) => state.blogs);
    const messages = useSelector((state: RootState) => state.listOfQuerries.messages);

    useEffect(() => {
        if (status === 'idle') {
          dispatch(fetchBlogs());
        }
      }, [status, dispatch]);

      useEffect(() => {
        dispatch(fetchQuerries());
      }, [dispatch]);


    useEffect(() =>{
      const fetchUsers = async () => {
          try {
            const response = await api.get('/users',{
              headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`, 
              },
            });
            setUsers(response.data.message);
            return response.data.message;
          } catch (error: any) {
            return (error.response?.data || 'An error occurred');
          }
        };

      fetchUsers()
    })  
    return (
      <Layout>
     <div className="sm:flex p-4 gap-8 block sm:pt-24 pt-2 ">
     <DashboardCartItem
       contentNumber={users?.length}
       content ={(
        <div className="center">
            <p><FaUserGroup /></p>
            <p>Users</p>
        </div>
       )}
       />

<DashboardCartItem
       contentNumber={blogs?.length}
       content ={(
        <div className="center">
            <p><FaBlog /></p>
            <p>Blogs</p>
        </div>
       )}
       />

<DashboardCartItem
       contentNumber={messages?.length}
       content ={(
        <div className="center">
            <p><FaQuestionCircle/></p>
            <p>Querries</p>
        </div>
       )}
       />

{/* <DashboardCartItem
       contentNumber={12}
       content ={(
        <div className="center">
            <p><FaUserGroup /></p>
            <p>Users</p>
        </div>
       )}
       /> */}
     </div>

     <div>
        <h1 className="pb-4 font-bold text-xl">With 3H everything is possible</h1>
        <div>
            <p>
            By applying the 3H in everything you do, nothing can defeat you. This means starting by thinking, loving your thoughts, and using your hands to implement your ideas.
            </p>

            <p>
            Combining these three principles suggests a holistic approach to life, where thoughtful consideration, passion, and action are all equally important components. By incorporating these principles into everything you do, the idea is that you'll be better equipped to overcome obstacles and achieve success.
            </p>
        </div>
     </div>
      </Layout>
    );
  };
  
  export default Dashboard;


