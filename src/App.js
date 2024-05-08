import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UsersPage = () => {
    const [users, setUsers] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [photos, setPhotos] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [selectedAlbumId, setSelectedAlbumId] = useState(null);
    const [showAlbums, setShowAlbums] = useState(false);
    const [showPhotos, setShowPhotos] = useState(false);

    useEffect(() => {
        // Отримати список користувачів
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []);

    const handleUserClick = (userId) => {
        // Отримати альбоми обраного користувача
        axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
            .then(response => {
                setAlbums(response.data);
                setSelectedUserId(userId);
                setSelectedAlbumId(null); // Скидаємо обраний альбом при зміні користувача
                setShowAlbums(true); // Показуємо альбоми при виборі користувача
                setShowPhotos(false); // Сховати фотографії
            })
            .catch(error => {
                console.error('Error fetching albums:', error);
            });
    };

    const handleAlbumClick = (albumId) => {
        // Отримати фото з обраного альбому
        axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
            .then(response => {
                setPhotos(response.data);
                setSelectedAlbumId(albumId);
                setShowPhotos(true); // Показуємо фотографії при виборі альбому
            })
            .catch(error => {
                console.error('Error fetching photos:', error);
            });
    };

    return (
        <div>
            <h1>Список користувачів</h1>
            <div className="user-list">
                {users.map(user => (
                    <div
                        className="user"
                        key={user.id}
                        onClick={() => handleUserClick(user.id)}
                        style={{cursor: 'pointer'}}
                    >
                        {user.name}
                    </div>
                ))}
            </div>
            {showAlbums && (
                <div>
                    <h2>Альбоми користувача</h2>
                    <div className="album-list">
                        {albums.map(album => (
                            <div
                                className="album"
                                key={album.id}
                                onClick={() => handleAlbumClick(album.id)}
                                style={{cursor: 'pointer'}}
                            >
                                {album.title}
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {showPhotos && (
                <div>
                    <h3>Фото з альбому</h3>
                    <div className="photo-list">
                        {photos.map(photo => (
                            <div className="photo" key={photo.id}>
                                <img src={photo.thumbnailUrl} alt={photo.title} />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default UsersPage;
