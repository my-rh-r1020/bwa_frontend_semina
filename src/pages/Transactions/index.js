// Import Libraries
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

// Import Components
import Breadcrumbs from "../../components/Breadcrumbs";
import Alerts from "../../components/Alerts";
import SearchInput from "../../components/SearchInput";
import Table from "../../components/TableWithAction";

// Import Redux
import { fetchTransactions, setKeyword } from "../../redux/transactions/actions";

export default function Transactions() {
  const dispatch = useDispatch(),
    navigate = useNavigate();

  // Redux
  const user = useSelector((state) => state.auth),
    transactions = useSelector((state) => state.transactions),
    notif = useSelector((state) => state.notif);

  // Fetch Transactions
  useEffect(() => {
    fetchTransactions();
  }, [dispatch, transactions.keyword]);

  // Prevent to signin page after login
  useEffect(() => {
    return () => {
      if (!user.token) return navigate("/signin");
    };
  });

  return (
    <Container>
      {/* Breadcrumbs */}
      <Breadcrumbs text2nd="Transactions" />

      {/* Notification */}
      {notif.status && <Alerts variant={notif.variant} message={notif.message} />}

      {/* Search */}
      <SearchInput name="keyword" className="mb-4 col-lg" value={transactions.keyword} handleChange={(e) => dispatch(setKeyword(e.target.value))} />

      {/* Table */}
      <Table status={transactions.status} thead={["Name", "Email", "Event", "Jadwal", "Venue"]} data={transactions.data} tbody={["name", "email", "title", "date", "venueName"]} />
    </Container>
  );
}
