import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Image, Button, Col, Row, Modal, Spin } from 'antd';
import Search from './Search';
import MarvelLogo from '../assets/MarvelLogo.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const APIENDPOINT = `https://gateway.marvel.com:443/v1/public/characters?`;
const API_KEY = `a302d154b2249cb8cea2ec2c4cb22eac`;

export default function MarvelCharacters() {
    const [searchItem, setSearchItem] = useState('');
    const [comicsData, setComicsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isComicsLoading, setComicsIsLoading] = useState(true);
    const searchTerm = (searchItem) => {
        setSearchItem(searchItem);
    }
    const [charactersData, setCharactersData] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
        setComicsData([])
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        setComicsData([])
        setComicsIsLoading(true)
    };

    const insert = function insert(main_string, ins_string, pos) {
        if (typeof (pos) == "undefined") {
            pos = 0;
        }
        if (typeof (ins_string) == "undefined") {
            ins_string = '';
        }
        return main_string.slice(0, pos) + ins_string + main_string.slice(pos);
    }

    const fetchComics = (comicsData) => {
        let result = insert(`${comicsData.collectionURI}`, 's', 4)
        axios.get(`${result}?&apikey=${API_KEY}`)

            .then((results) => {
                setComicsData(results.data.data.results);
                setComicsIsLoading(false)
            })
        showModal();
    }

    const searchChars = () => {
        setIsLoading(true);
        if (searchItem) {
            axios.get(`${APIENDPOINT}name=${searchItem}&apikey=${API_KEY}`)
                .then((response) => {
                    setCharactersData(response.data.data.results);
                    setIsLoading(false);
                    if (response.data.data.results.length === 0) {
                        toast.error("No one here by that name..");
                    }
                }).catch((error) => {
                    console.error(error)
                })
        }
    }

    useEffect(() => {
        if (searchItem === '') {
            setIsLoading(true);
            axios.get(`${APIENDPOINT}&apikey=${API_KEY}`)
                .then((response) => {
                    setCharactersData(response.data.data.results);
                    setIsLoading(false);
                    if (response.data.data.results.length === 0) {
                        toast.error("No one here by that name..");
                    }
                }).catch((error) => {
                    console.error(error)
                })
        }
    }, [searchItem])
    return (
        <div className="app-body">
            <img src={MarvelLogo} className="marvel-logo" />
            <Search searchTerm={searchTerm} />
            <Button type="primary"
                size="large"
                onClick={searchChars}
                style={{ marginTop: 20, width: 100 }}
            >
                Search
            </Button>
            <ToastContainer />
            {isLoading ? (
                <div className="spinner">
                    <Spin size="large" />
                    <h4>Loading..Please Wait</h4>
                </div>
            ) : (
                charactersData.map((item) => {
                    return (
                        <Card title={item.name} className="card-body">
                            <Row>
                                <Col span={12}>
                                    <Image
                                        width={200}
                                        src={`${item.thumbnail.path}/portrait_incredible.jpg`}
                                    />
                                </Col>
                                <Col span={12}>
                                    <p>{item.description ? item.description : 'No Description Available'}</p>
                                    <Button type="primary"
                                        size="large"
                                        onClick={() => fetchComics(item.comics)}
                                    >
                                        Open Stories
                                    </Button>
                                </Col>
                            </Row>
                        </Card>
                    )
                })
            )}
            <Modal
                centered
                style={{ top: 20 }}
                title="Comics Data"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}>
                {isComicsLoading ? (
                    <div className="spinner">
                        <Spin size="large" />
                        <h4>Loading..Please Wait</h4>
                    </div>
                ) : (
                    comicsData.map((item) => {
                        return (
                            <div className="comics-data">
                                <h2>{item.title}</h2>
                                <p>{item.description ? item.description : "No Description Available.."}</p>
                            </div>
                        )
                    })
                )}
            </Modal>
        </div>
    )
}
