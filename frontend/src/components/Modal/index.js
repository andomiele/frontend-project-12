import AddChannelModal from '../Channels/AddChannelModal';
import EditChannelModal from '../Channels/EditChannelModal';
import DeleteChannelModal from '../Channels/DeleteChannelModal';

const modals = {
  adding: AddChannelModal,
  removing: DeleteChannelModal,
  renaming: EditChannelModal,
};

export default (modalName) => modals[modalName];
