// Import Libraries
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { formatDate } from "../../utils/formatDate";

// Import Components
import Breadcrumbs from "../../components/Breadcrumbs";
import Alerts from "../../components/Alerts";
import SearchInput from "../../components/SearchInput";
import Table from "../../components/TableWithAction";
import SelectBox from "../../components/SelectBox";
import DateRange from "../../components/InputDate";

// Import Redux
import { fetchTransactions, setKeyword, setPage, setEvent, setDate } from "../../redux/transactions/actions";
import { fetchListEvents } from "../../redux/lists/actions";

export default function Transactions() {
  const dispatch = useDispatch(),
    navigate = useNavigate();
  let [isShowed, setIsShowed] = React.useState(false);

  // Redux
  const user = useSelector((state) => state.auth),
    transactions = useSelector((state) => state.transactions),
    notif = useSelector((state) => state.notif),
    lists = useSelector((state) => state.lists);

  // Display Date
  const displayDate = `${transactions.date?.startDate ? formatDate(transactions.date?.startDate) : ""}${transactions.date?.endDate ? " - " + formatDate(transactions.date.endDate) : ""}`;

  // Fetch Transactions
  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch, transactions.keyword, transactions.page, transactions.event]);

  // Fetch List Events
  useEffect(() => {
    dispatch(fetchListEvents());
  }, [dispatch]);

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

      <Row>
        {/* Search */}
        <Col>
          <SearchInput name="keyword" className="mb-4 col-lg" query={transactions.keyword} handleChange={(e) => dispatch(setKeyword(e.target.value))} />
        </Col>
        {/* Select Box Categories */}
        <Col>
          <SelectBox placeholder="Event Filters" name="event" handleChange={(e) => dispatch(setEvent(e))} options={lists.events} value={transactions.event} isClearable={true} />
        </Col>
        <Col className="cursor-pointer position-relative" onClick={() => setIsShowed(true)}>
          <SearchInput disabled query={displayDate} />
          {isShowed ? <DateRange date={transactions.date} setIsShowed={() => setIsShowed(!isShowed)} onChangeDate={(ranges) => dispatch(setDate(ranges))} /> : ""}
        </Col>
      </Row>

      {/* Table */}
      <Table
        status={transactions.status}
        thead={["Nama", "Email", "Event", "Jadwal", "Tempat"]}
        data={transactions.data}
        tbody={["name", "email", "title", "date", "venueName"]}
        actionNotDisplay
        pages={transactions.pages}
        handlePageClick={({ selected }) => dispatch(setPage(selected + 1))}
      />
    </Container>
  );
}
