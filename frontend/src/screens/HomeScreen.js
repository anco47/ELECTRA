import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listProducts } from "../actions/productActions";
import { useParams } from "react-router-dom";

const HomeScreen = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const keyword = params.keyword;
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch]);

  return (
    <>
      <div
        className="py-5"
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          fontWeight: "bold",
        }}
      >
        All ELECTRICAL & ELECTRONIC'S ITEMS OF YOUR NEED!
      </div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products &&
            products.map((product) => (
              <Col key={product._id} sm={12} md={16} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
