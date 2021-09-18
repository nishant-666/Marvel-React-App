import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Image, Button, Row, Col, Modal, Spin } from 'antd';
import Search from './Search';
import MarvelLogo from '../assets/MarvelLogo.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const APIENDPOINT = `https://gateway.marvel.com:443/v1/public/characters?`;
const API_KEY = `a302d154b2249cb8cea2ec2c4cb22eac`;

export default function MarvelCharacters() {
    const [searchItem, setSearchItem] = useState('');
    const [comicsData, setComicsData] = useState([]);
    const [storiesData, setStoriesData] = useState([]);
    const [isComicsLoading, setComicsLoading] = useState(true);
    const [isComicData, setComicsDataLoading] = useState(true);
    const searchTerm = (searchItem) => {
        setSearchItem(searchItem);
    }
    const showModal = () => {
        setIsModalVisible(true);
    };

    const showStoriesModal = () => {
        setIsStoriesModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleStoriesOk = () => {
        setIsStoriesModalVisible(false);
    }

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleStoriesCancel = () => {
        setIsStoriesModalVisible(false);
    };

    const [charactersData, setCharactersData] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isStoriesModalVisible, setIsStoriesModalVisible] = useState(false);
    const searchChars = () => {
        if (searchItem) {
            axios.get(`${APIENDPOINT}name=${searchItem}&apikey=${API_KEY}`)
                .then((response) => {
                    setCharactersData(response.data.data.results);
                    setComicsLoading(false)
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
            axios.get(`${APIENDPOINT}&apikey=${API_KEY}`)
                .then((response) => {
                    setCharactersData(response.data.data.results);
                    setComicsLoading(false)
                    if (response.data.data.results.length === 0) {
                        toast.error("No one here by that name..");
                    }
                }).catch((error) => {
                    console.error(error)
                })
        }
    }, [searchItem])

    const checkComics = (comicsData) => {
        axios.get(`${comicsData}?apikey=${API_KEY}`)
            .then((comicsData) => {
                setComicsData(comicsData.data.data.results);
                setComicsDataLoading(false);
            })
        showModal()
    }

    const checkComicStories = (stories) => {
        setStoriesData(stories.items)
        console.log(stories.items)

        showStoriesModal()
    }

    const getStoriesURL = (resourceURI) => {
        axios.get(`${resourceURI}?apikey=${API_KEY}`)
            .then((item) => {
                console.log(item.data.data.results)
            })
    }
    return (
        <div className="app-body">
            <img src={MarvelLogo} className="marvel-logo" alt="logo" />
            <Search searchTerm={searchTerm} />
            <Button type="primary"
                size="large"
                onClick={searchChars}
                style={{ marginTop: 20, width: 100 }}
            >
                Search
            </Button>
            <ToastContainer />
            {isComicsLoading ? (
                <div className="spinner">
                    <Spin />
                    <h3 style={{ marginLeft: 10 }}>Loading...</h3>
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
                                        onClick={() => checkComics(item.comics.collectionURI)}
                                    >
                                        Check out the Comics
                                    </Button>
                                </Col>
                            </Row>
                        </Card>
                    )
                })
            )}
            <Modal width={1000} centered style={{ top: 20 }} title="Comic Data" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                {isComicData ? (
                    <div className="spinner">
                        <Spin />
                        <h3 style={{ marginLeft: 10 }}>Loading...</h3>
                    </div>
                ) : (
                    comicsData.map((item) => {
                        return (
                            <div className="comics-data">
                                <div>
                                    <h2>{item.title}</h2>
                                    <p>{item.description ? item.description : 'No Description Available'}</p>
                                    <Button type="primary"
                                        onClick={() => checkComicStories(item.stories)}
                                        size="large"
                                    >
                                        Check Stories
                                    </Button>
                                </div>
                            </div>
                        )
                    })
                )}
            </Modal>

            <Modal width={2000} centered title="Comic Data" visible={isStoriesModalVisible} onOk={handleStoriesOk} onCancel={handleStoriesCancel}>
                {storiesData.map((item) => {
                    return (
                        <h4><a onClick={() => getStoriesURL(item.resourceURI)}>{item.name}</a></h4>
                    )
                })}
            </Modal>
        </div>
    )
}
