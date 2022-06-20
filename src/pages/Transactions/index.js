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
import { fetchTransactions } from "../../redux/transactions/actions";

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
  }, [dispatch]);

  // Handle Delete
  const handleDelete = (id) => {};

  return (
    <Container>
      {/* Breadcrumbs */}
      <Breadcrumbs text2nd="Transactions" />

      {/* Notification */}
      {notif.status && <Alerts variant={notif.variant} message={notif.message} />}

      {/* Search */}
      <SearchInput name="keyword" />

      {/* Table */}
      <Table status={transactions.status} thead={["Personal Detail", "Participant", "Event", "Payment", "Aksi"]} data={transactions.data} tbody={["personalDetail", "participant", "event", "payment"]} />
    </Container>
  );
}
