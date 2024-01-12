import { add } from "date-fns";

function fromToday(numDays, withTime = false) {
  const date = add(new Date(), { days: numDays });
  if (!withTime) date.setUTCHours(0, 0, 0, 0);
  return date.toISOString().slice(0, -1);
}

export const bookings = [
  // CABIN 001
  {
    created_at: fromToday(-20, true),
    start_date: fromToday(0),
    end_date: fromToday(7),
    cabin_id: "9ce3a467-8136-4e69-91dd-ccc9c34c588d",
    guest_id: 2,
    has_breakfast: true,
    observations:
      "I have a gluten allergy and would like to request a gluten-free breakfast.",
    is_paid: false,
    num_guests: 1,
  },
  {
    created_at: fromToday(-33, true),
    start_date: fromToday(-23),
    end_date: fromToday(-13),
    cabin_id: "9ce3a467-8136-4e69-91dd-ccc9c34c588d",
    guest_id: 3,
    has_breakfast: true,
    observations: "",
    is_paid: true,
    num_guests: 2,
  },
  {
    created_at: fromToday(-27, true),
    start_date: fromToday(12),
    end_date: fromToday(18),
    cabin_id: "9ce3a467-8136-4e69-91dd-ccc9c34c588d",
    guest_id: 4,
    has_breakfast: false,
    observations: "",
    is_paid: false,
    num_guests: 2,
  },

  // CABIN 002
  {
    created_at: fromToday(-45, true),
    start_date: fromToday(-45),
    end_date: fromToday(-29),
    cabin_id: "91e5548c-b6ed-435c-b276-25eb2a5d6833",
    guest_id: 5,
    has_breakfast: false,
    observations: "",
    is_paid: true,
    num_guests: 2,
  },
  {
    created_at: fromToday(-2, true),
    start_date: fromToday(15),
    end_date: fromToday(18),
    cabin_id: "91e5548c-b6ed-435c-b276-25eb2a5d6833",
    guest_id: 6,
    has_breakfast: true,
    observations: "",
    is_paid: true,
    num_guests: 2,
  },
  {
    created_at: fromToday(-5, true),
    start_date: fromToday(33),
    end_date: fromToday(48),
    cabin_id: "91e5548c-b6ed-435c-b276-25eb2a5d6833",
    guest_id: 7,
    has_breakfast: true,
    observations: "",
    is_paid: false,
    num_guests: 2,
  },

  // CABIN 003
  {
    created_at: fromToday(-65, true),
    start_date: fromToday(-25),
    end_date: fromToday(-20),
    cabin_id: "c7c3fef1-dde5-4a15-a54c-d72d76bdef06",
    guest_id: 8,
    has_breakfast: true,
    observations: "",
    is_paid: true,
    num_guests: 4,
  },
  {
    created_at: fromToday(-2, true),
    start_date: fromToday(-2),
    end_date: fromToday(0),
    cabin_id: "c7c3fef1-dde5-4a15-a54c-d72d76bdef06",
    guest_id: 9,
    has_breakfast: false,
    observations: "We will be bringing our small dog with us",
    is_paid: true,
    num_guests: 3,
  },
  {
    created_at: fromToday(-14, true),
    start_date: fromToday(-14),
    end_date: fromToday(-11),
    cabin_id: "c7c3fef1-dde5-4a15-a54c-d72d76bdef06",
    guest_id: 10,
    has_breakfast: true,
    observations: "",
    is_paid: true,
    num_guests: 4,
  },

  // CABIN 004
  {
    created_at: fromToday(-30, true),
    start_date: fromToday(-4),
    end_date: fromToday(8),
    cabin_id: "6a82b667-17dd-4201-bca7-ec12bb69e5c0",
    guest_id: 11,
    has_breakfast: true,
    observations: "",
    is_paid: true,
    num_guests: 4,
  },
  {
    created_at: fromToday(-1, true),
    start_date: fromToday(12),
    end_date: fromToday(17),
    cabin_id: "6a82b667-17dd-4201-bca7-ec12bb69e5c0",
    guest_id: 12,
    has_breakfast: true,
    observations: "",
    is_paid: false,
    num_guests: 4,
  },
  {
    created_at: fromToday(-3, true),
    start_date: fromToday(18),
    end_date: fromToday(19),
    cabin_id: "6a82b667-17dd-4201-bca7-ec12bb69e5c0",
    guest_id: 13,
    has_breakfast: false,
    observations: "",
    is_paid: true,
    num_guests: 1,
  },

  // CABIN 005
  {
    created_at: fromToday(0, true),
    start_date: fromToday(14),
    end_date: fromToday(21),
    cabin_id: "c7c3fef1-dde5-4a15-a54c-d72d76bdef06",
    guest_id: 14,
    has_breakfast: true,
    observations: "",
    is_paid: false,
    num_guests: 5,
  },
  {
    created_at: fromToday(-6, true),
    start_date: fromToday(-6),
    end_date: fromToday(-4),
    cabin_id: "c7c3fef1-dde5-4a15-a54c-d72d76bdef06",
    guest_id: 15,
    has_breakfast: true,
    observations: "",
    is_paid: true,
    num_guests: 4,
  },
  {
    created_at: fromToday(-4, true),
    start_date: fromToday(-4),
    end_date: fromToday(-1),
    cabin_id: "c7c3fef1-dde5-4a15-a54c-d72d76bdef06",
    guest_id: 16,
    has_breakfast: false,
    observations: "",
    is_paid: true,
    num_guests: 6,
  },

  // CABIN 006
  {
    created_at: fromToday(-3, true),
    start_date: fromToday(0),
    end_date: fromToday(11),
    cabin_id: "e74b92f5-3e58-4e94-8a1a-924ef0a96ae6",
    guest_id: 17,
    has_breakfast: false,
    observations:
      "We will be checking in late, around midnight. Hope that's okay :)",
    is_paid: true,
    num_guests: 6,
  },
  {
    created_at: fromToday(-16, true),
    start_date: fromToday(-16),
    end_date: fromToday(-9),
    cabin_id: "e74b92f5-3e58-4e94-8a1a-924ef0a96ae6",
    guest_id: 18,
    has_breakfast: true,
    observations: "I will need a rollaway bed for one of the guests",
    is_paid: true,
    num_guests: 4,
  },
  {
    created_at: fromToday(-18, true),
    start_date: fromToday(-4),
    end_date: fromToday(-1),
    cabin_id: "e74b92f5-3e58-4e94-8a1a-924ef0a96ae6",
    guest_id: 19,
    has_breakfast: true,
    observations: "",
    is_paid: true,
    num_guests: 6,
  },

  // CABIN 007
  {
    created_at: fromToday(-2, true),
    start_date: fromToday(17),
    end_date: fromToday(23),
    cabin_id: "1d555983-009f-414c-a6fd-23b0aa494bd9",
    guest_id: 20,
    has_breakfast: false,
    observations: "",
    is_paid: false,
    num_guests: 8,
  },
  {
    created_at: fromToday(-7, true),
    start_date: fromToday(40),
    end_date: fromToday(50),
    cabin_id: "1d555983-009f-414c-a6fd-23b0aa494bd9",
    guest_id: 21,
    has_breakfast: true,
    observations: "",
    is_paid: true,
    num_guests: 7,
  },
  {
    created_at: fromToday(-55, true),
    start_date: fromToday(32),
    end_date: fromToday(37),
    cabin_id: "1d555983-009f-414c-a6fd-23b0aa494bd9",
    guest_id: 22,
    has_breakfast: true,
    observations: "",
    is_paid: true,
    num_guests: 6,
  },

  // CABIN 008
  {
    created_at: fromToday(-8, true),
    start_date: fromToday(-5),
    end_date: fromToday(0),
    cabin_id: "ba9cbec5-3db3-4e51-ad3e-5b2d57d48dab",
    guest_id: 1,
    has_breakfast: true,
    observations:
      "My wife has a gluten allergy so I would like to request a gluten-free breakfast if possible",
    is_paid: true,
    num_guests: 9,
  },
  {
    created_at: fromToday(0, true),
    start_date: fromToday(0),
    end_date: fromToday(5),
    cabin_id: "ba9cbec5-3db3-4e51-ad3e-5b2d57d48dab",
    guest_id: 23,
    has_breakfast: true,
    observations:
      "I am celebrating my anniversary, can you arrange for any special amenities or decorations?",
    is_paid: true,
    num_guests: 10,
  },
  {
    created_at: fromToday(-10, true),
    start_date: fromToday(10),
    end_date: fromToday(13),
    cabin_id: "ba9cbec5-3db3-4e51-ad3e-5b2d57d48dab",
    guest_id: 24,
    has_breakfast: false,
    observations: "",
    is_paid: true,
    num_guests: 7,
  },
];
