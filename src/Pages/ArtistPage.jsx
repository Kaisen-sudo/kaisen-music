import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useFetch } from '../hooks/useFetch.js';
import { api } from '../services/api.js';
import TrackCard from '../components/TrackCard.jsx';
import LoadingSkeleton from '../components/LoadingSkeleton.jsx';
import ErrorMessage from '../components/ErrorMessage.jsx';
import Pagination from '../components/Pagination.jsx';
