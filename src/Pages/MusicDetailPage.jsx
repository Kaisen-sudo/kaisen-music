import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch.js';
import { api } from '../services/api.js';
import { useState, useRef } from 'react';
import LoadingSkeleton from '../components/LoadingSkeleton.jsx';
import ErrorMessage from '../components/ErrorMessage.jsx';
import playIcon from '../assets/icons/play.svg';
import pauseIcon from '../assets/icons/pause.svg';
