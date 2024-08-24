import React, { useEffect, useState } from 'react';
import ItemList from '../components/common/querriesList';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../api/store';
import Layout from '../components/common/layout';
import { useDispatch } from 'react-redux';
import { fetchQuerries, deleteQuery } from '../api/reducers/contact.us';
import Spinner from '../components/common/spinner';
import { toast, ToastContainer } from 'react-toastify';
import { ContactorDetails } from '../types';

const ParentComponent: React.FC = () => {
  const messages = useSelector((state: RootState) => state.listOfQuerries.messages);
  const loading = useSelector((state: RootState) => state.listOfQuerries.loading);
  const [deletingQueryId, setDeletingQueryId] = useState<string | null>(null);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuerries());
  }, [dispatch]);

  const handleDelete = async (id: string) => {
    setDeletingQueryId(id);
    const response = await dispatch(deleteQuery(id));
    toast.success(`Query deleted successfully!`);
    setDeletingQueryId(null);
    dispatch(fetchQuerries());
  };

  const items = messages.map((msg: ContactorDetails) => ({
    _id: msg._id,
    visitor: msg.visitor,
    message: msg.message as string,
  }));

  return (
    <Layout>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <h1 className="text-2xl font-bold text-black">Queries</h1>
          <ItemList items={items} onDelete={handleDelete} loading={false} />
        </div>
      )}
      <ToastContainer />
    </Layout>
  );
};

export default ParentComponent;
