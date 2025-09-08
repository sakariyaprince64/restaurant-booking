import React, { createContext, useContext, useState } from 'react';

interface Room {
  id: number;
  title: string;
  image: string;
  price: number;
  isAC: boolean;
  sharingType: string;
}

interface BookingContextType {
  isModalOpen: boolean;
  selectedRoom: Room | null;
  openBookingModal: (room: Room) => void;
  closeBookingModal: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  const openBookingModal = (room: Room) => {
    setSelectedRoom(room);
    setIsModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsModalOpen(false);
    setSelectedRoom(null);
  };

  return (
    <BookingContext.Provider value={{
      isModalOpen,
      selectedRoom,
      openBookingModal,
      closeBookingModal
    }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};