import mock_api_data from './mock_api.json';

export const fetchUsers = () => {
  return Promise.resolve(mock_api_data)
}
