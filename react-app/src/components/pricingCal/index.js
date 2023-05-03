// import React, { useEffect, useState } from 'react';
// import '@mobiscroll/react/dist/css/mobiscroll.min.css';
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useHistory } from "react-router-dom";
// import { Eventcalendar, Draggable, setOptions, getJson, toast } from '@mobiscroll/react';
// import './cal.css'
// import * as calendarStore from "../../store/calendar";
// import moment, { calendarFormat } from 'moment';

// setOptions({
//     theme: 'ios',
//     themeVariant: 'light'
// });

// const now = new Date();

// function Calendar() {
//     const history = useHistory();
//     const dispatch = useDispatch();
//     const user = useSelector((state) => state.session.user);
//     const calendarReducer = useSelector((state) => state.calendarReducer);
//     let calendars = calendarReducer?.allCalendars
//     const [calendarState, setCalendarState] = useState(calendars);


//     if(!calendars){
//         dispatch(calendarStore.thunk_getAllCalendars());
//       }

//       useEffect(() => {
//         dispatch(calendarStore.thunk_getAllCalendars());


//         console.log(myEvents)
//       }, [dispatch]);
//       moment.tz.setDefault("America/New_York");


//     const [myEvents, setEvents] = React.useState();
//     const [draggableMeeting, setDraggableMeeting] = React.useState();
//     const [draggableRetreat, setDraggableRetreat] = React.useState();
//     const [draggableBlank, setDraggableBlank] = React.useState();


// // let news = moment(calendarState[0].start, "MM/DD/YYYY HH:mm a").tz("UTC")
// // console.log(news.toJSON())

//     const setMeetingElm = React.useCallback((elm) => {
//         setDraggableMeeting(elm);
//     }, []);

//     const setRetreatElm = React.useCallback((elm) => {
//         setDraggableRetreat(elm);
//     }, []);

//     const setBlankElm = React.useCallback((elm) => {
//         setDraggableBlank(elm);
//     }, []);

//    let meetingData = [{
//         title: 'Peak 1',
//         color: '#cf4343',
//         start: '2023-02-06T08:00:00.000Z',
//         end: '2023-02-06T08:00:00.000Z',
//         userId: 1,
//     }];
// console.log(meetingData)
//     const events =  [{start: '2023-02-08T08:00:00.000Z', end: '2023-02-08T08:00:00.000Z', title: 'Friends binge marathon', color: '#7bde83', id: '40'}]


//     useEffect(() => {

//       }, []);
// let trial = {}
// let newarr = []
// newarr.push(trial)
// let meeting =[{"start":"2023-02-06T08:00:00.000Z","end":"2023-02-09T17:00:00.000Z","title":"Test Trial","color":"#ff6d42"},{"start":"2023-02-11T12:00:00.000Z","end":"2023-02-12T20:00:00.000Z","title":"Friends binge marathon","color":"#7bde83"},{"start":"2023-02-18T12:00:00.000Z","end":"2023-02-19T20:00:00.000Z","title":"Friends binge marathon","color":"#7bde83"},{"start":"2023-02-06T08:00:00.000Z","end":"2023-02-06T09:00:00.000Z","title":"Product team mtg.","color":"#913aa7"},{"start":"2023-02-06T10:00:00.000Z","end":"2023-02-06T11:00:00.000Z","title":"Green box to post office","color":"#6e7f29"},{"start":"2023-02-06T13:00:00.000Z","end":"2023-02-06T14:00:00.000Z","title":"Lunch @ Butcher's","color":"#bb0000"},{"start":"2023-02-06T15:00:00.000Z","end":"2023-02-06T16:00:00.000Z","title":"Status Update Meeting","color":"#00aabb"},{"start":"2023-02-06T09:00:00.000Z","end":"2023-02-06T10:00:00.000Z","title":"Board meeting","color":"#cfc014"},{"start":"2023-02-06T19:00:00.000Z","end":"2023-02-06T21:00:00.000Z","title":"Pizza Night","color":"#d7be0d"},{"start":"2023-02-06T17:00:00.000Z","end":"2023-02-06T18:00:00.000Z","title":"Clever Conference","color":"#a71111"},{"start":"2023-02-05T07:45:00.000Z","end":"2023-02-05T09:00:00.000Z","title":"Quick mtg. with Martin","color":"#de3d83"},{"start":"2023-02-08T08:30:00.000Z","end":"2023-02-08T09:30:00.000Z","title":"Product team mtg.","color":"#f67944"},{"start":"2023-02-08T10:00:00.000Z","end":"2023-02-08T10:45:00.000Z","title":"Stakeholder mtg.","color":"#a144f6"},{"recurring":{"repeat":"yearly","month":2,"day":14},"allDay":true,"title":"Dexter BD","color":"#37bbe4"},{"recurring":{"repeat":"yearly","month":2,"day":25},"allDay":true,"title":"Luke BD","color":"#37bbe4"},{"recurring":{"repeat":"weekly","weekDays":"WE"},"allDay":true,"title":"Employment (Semi-weekly)","color":"#228c73"},{"start":"2023-02-09T23:00:00.000Z","end":"2023-02-14T23:00:00.000Z","allDay":true,"title":"Sam OFF","color":"#ca4747"},{"start":"2023-02-17T23:00:00.000Z","end":"2023-02-28T23:00:00.000Z","allDay":true,"title":"Europe tour","color":"#56ca70"},{"start":"2023-02-06T23:00:00.000Z","end":"2023-02-24T23:00:00.000Z","allDay":true,"title":"Dean OFF","color":"#99ff33"},{"start":"2023-03-04T23:00:00.000Z","end":"2023-03-13T23:00:00.000Z","allDay":true,"title":"Mike OFF","color":"#e7b300"},{"start":"2023-05-06T22:00:00.000Z","end":"2023-05-15T22:00:00.000Z","allDay":true,"title":"John OFF","color":"#669900"},{"start":"2023-05-31T22:00:00.000Z","end":"2023-06-10T22:00:00.000Z","allDay":true,"title":"Carol OFF","color":"#6699ff"},{"start":"2023-07-01T22:00:00.000Z","end":"2023-07-16T22:00:00.000Z","allDay":true,"title":"Jason OFF","color":"#cc9900"},{"start":"2023-08-05T22:00:00.000Z","end":"2023-08-13T22:00:00.000Z","allDay":true,"title":"Ashley OFF","color":"#339966"},{"start":"2023-09-09T22:00:00.000Z","end":"2023-09-19T22:00:00.000Z","allDay":true,"title":"Marisol OFF","color":"#8701a9"},{"start":"2023-09-30T22:00:00.000Z","end":"2023-10-11T22:00:00.000Z","allDay":true,"title":"Sharon OFF","color":"#cc6699"},{"recurring":{"repeat":"yearly","month":12,"day":25},"allDay":true,"title":"Christmas Day","color":"#ff0066"},{"recurring":{"repeat":"yearly","month":1,"day":1},"allDay":true,"title":"New Year's day","color":"#99ccff"},{"recurring":{"repeat":"yearly","month":4,"day":1},"allDay":true,"title":"April Fool's Day","color":"#ff6666"},{"recurring":{"repeat":"yearly","month":11,"day":2},"allDay":true,"title":"File Form 720 for the third quarter","color":"#147ea6"},{"recurring":{"repeat":"yearly","month":11,"day":2},"allDay":true,"title":"File Form 730 and pay tax on wagers accepted during September","color":"#a73a4e"},{"recurring":{"repeat":"yearly","month":11,"day":2},"allDay":true,"title":"File Form 2290 and pay the tax for vehicles first used during September","color":"#218e0d"},{"recurring":{"repeat":"yearly","month":11,"day":2},"allDay":true,"title":"File Form 941 for the third quarter","color":"#a67914"},{"recurring":{"repeat":"yearly","month":11,"day":2},"allDay":true,"title":"Deposit FUTA owed through Sep if more than $500","color":"#3c0707"},{"recurring":{"repeat":"yearly","month":11,"day":30},"allDay":true,"title":"Deposit payroll tax for payments on Nov 21-24 if the semiweekly deposit rule applies","color":"#14a618"},{"recurring":{"repeat":"yearly","month":11,"day":30},"allDay":true,"title":"File Form 730 and pay tax on wagers accepted during October","color":"#722ac1"},{"recurring":{"repeat":"yearly","month":11,"day":30},"allDay":true,"title":"File Form 2290 and pay the tax for vehicles first used during October","color":"#256069"}]
//     React.useEffect(() => {


//       console.log(calendars)


//     }, []);

//     const view = React.useMemo(() => {
//         return {
//             calendar: { labels: true }
//         };
//     }, []);

//     const onEventCreate = React.useCallback((event) => {
//         toast({
//             message: 'Event dropped'
//         });
//     }, []);


// let tryn;

//     return (
//         <div className="mbsc-grid mbsc-no-padding">
//               <button
//               className=""
//               onClick={() =>{ setCalendarState(calendarReducer?.allCalendars)

//                 calendarState.map((cal) => {

//                     cal.start = moment(cal.start, "MM/DD/YYYY HH:mm a").tz("UTC").toJSON()
//                     cal.end = moment(cal.end, "MM/DD/YYYY HH:mm a").tz("UTC").toJSON()

//                                        trial = [{...cal}]
//                                 })
//                                 console.log(trial)
//         }}
//             >
//               Refresh Quotes
//             </button>
//             <div className="mbsc-row">
//                 <div className="mbsc-col-sm-9 external-drop-calendar">
//                     {/* {calendarState && calendarState.map((cal) => {

//         cal.start =JSON.stringify(moment(cal.start, "MM/DD/YYYY HH:mm a").tz("UTC"));
//         cal.end =JSON.stringify(moment(cal.end, "MM/DD/YYYY HH:mm a").tz("UTC"));

//                            trial =
//                              {...cal}
//                     })} */}

// <Eventcalendar
//                         data={events}
//                         view={view}
//                         dragToMove={true}
//                         externalDrop={true}
//                         onEventCreate={onEventCreate}
//                     />
// {calendarState &&
//               calendarState.map((calendar, key) => (
//               <>
//               {
// }
//               </>

//               ))}


//                 </div>

//                 <div className="mbsc-col-sm-3">


//                     <div ref={setMeetingElm} className="external-drop-task" style={{background: '#cf4343'}}>
//                         <div>K --  $31,640  -- SAT, TUES, WED</div>
//                         <div></div>
//                         <Draggable dragData={meetingData} element={draggableMeeting} />
//                     </div>
// {/*
//                     <div ref={setMeetingElm} className="external-drop-task" style={{background: '#cf4343'}}>
//                         <div>L -- $37,290 -- SUN, MON, THURS, FRI</div>
//                         <div></div>
//                         <Draggable dragData={meetingData} element={draggableMeeting} />
//                     </div>

//                     <div ref={setMeetingElm} className="external-drop-task" style={{background: '#cf4343'}}>
//                         <div>O -- $33,290 -- 14 months </div>
//                         <div></div>
//                         <Draggable dragData={meetingData} element={draggableMeeting} />
//                     </div>


//                      <div ref={setMeetingElm} className="external-drop-task" style={{background: '#cf4343'}}>
//                         <div>P1 $49,880</div>
//                         <div></div>
//                         <Draggable dragData={meetingData} element={draggableMeeting} />
//                     </div>

//                     <div ref={setRetreatElm} className="external-drop-task" style={{background: '#F88379'}}>
//                         <div>P2 $47,845</div>
//                         <div></div>
//                         <Draggable dragData={retreatData} element={draggableRetreat} />
//                     </div>
//                     <div ref={setRetreatElm} className="external-drop-task" style={{background: '#E30B5C'}}>
//                         <div>P3 $47,290</div>
//                         <div></div>
//                         <Draggable dragData={retreatData} element={draggableRetreat} />
//                     </div>
//                     <div ref={setRetreatElm} className="external-drop-task" style={{background: '#A52A2A'}}>
//                         <div>P4 $40,290</div>
//                         <div></div>
//                         <Draggable dragData={retreatData} element={draggableRetreat} />
//                     </div>
//                     <div ref={setRetreatElm} className="external-drop-task" style={{background: '#0000FF'}}>
//                         <div>Demand 0</div>
//                         <div></div>
//                         <Draggable dragData={retreatData} element={draggableRetreat} />
//                     </div>
//                     <div ref={setRetreatElm} className="external-drop-task" style={{background: '#6495ED'}}>
//                         <div>Demand 1</div>
//                         <div></div>
//                         <Draggable dragData={retreatData} element={draggableRetreat} />
//                     </div>
//                     <div ref={setRetreatElm} className="external-drop-task" style={{background: '#6F8FAF'}}>
//                         <div>Demand 2</div>
//                         <div></div>
//                         <Draggable dragData={retreatData} element={draggableRetreat} />
//                     </div>
//                     <div ref={setRetreatElm} className="external-drop-task" style={{background: '#A7C7E7'}}>
//                         <div>Demand 3</div>
//                         <div></div>
//                         <Draggable dragData={retreatData} element={draggableRetreat} />
//                     </div> <div ref={setRetreatElm} className="external-drop-task" style={{background: '#ADD8E6'}}>
//                         <div>Demand 4</div>
//                         <div></div>
//                         <Draggable dragData={retreatData} element={draggableRetreat} />
//                     </div>

//                     <div ref={setBlankElm} className="external-drop-task external-drop-task-blank">
//                         <div>Blank event</div>
//                         <Draggable element={draggableBlank} />
//                     </div> */}

//                 </div>
//             </div>
//         </div>

//     );

// }

// export default Calendar;






// import React from 'react';
// import '@mobiscroll/react/dist/css/mobiscroll.min.css';
// import { Eventcalendar, snackbar, setOptions, Popup, Button, Input, Textarea, Switch, Datepicker, SegmentedGroup, SegmentedItem } from '@mobiscroll/react';

// setOptions({
//     theme: 'windows',
//     themeVariant: 'light'
// });

// const now = new Date();
// const defaultEvents = [{
//     id: 1,
//     start: '2023-02-08T13:00',
//     end: '2023-02-08T13:45',
//     title: 'Lunch @ Butcher\'s',
//     description: '',
//     allDay: false,
//     free: true,
//     color: '#009788'
// }, {
//     id: 2,
//     start: '2023-02-01T15:00',
//     end: '2023-02-01T16:00',
//     title: 'General orientation',
//     description: '',
//     allDay: false,
//     free: false,
//     color: '#ff9900'
// }, {
//     id: 3,
//     start: '2023-01-31T18:00',
//     end: '2023-01-31T22:00',
//     title: 'Dexter BD',
//     description: '',
//     allDay: false,
//     free: true,
//     color: '#3f51b5'
// }, {
//     id: 4,
//     start: '2023-02-02T10:30',
//     end: '2023-02-02T11:30',
//     title: 'Stakeholder mtg.',
//     description: '',
//     allDay: false,
//     free: false,
//     color: '#f44437'
// }];

// const viewSettings = {
//     calendar: { labels: true }
// };
// const responsivePopup = {
//     medium: {
//         display: 'anchored',
//         width: 400,
//         fullScreen: false,
//         touchUi: false
//     }
// };
// const colorPopup = {
//     medium: {
//         display: 'anchored',
//         touchUi: false,
//         buttons: []
//     }
// }
// const colors = ['#ffeb3c', '#ff9900', '#f44437', '#ea1e63', '#9c26b0', '#3f51b5', '', '#009788', '#4baf4f', '#7e5d4e'];

// function Calendar() {
//     const [myEvents, setMyEvents] = React.useState(defaultEvents);
//     const [tempEvent, setTempEvent] = React.useState(null);
//     const [isOpen, setOpen] = React.useState(false);
//     const [isEdit, setEdit] = React.useState(false);
//     const [anchor, setAnchor] = React.useState(null);
//     const [start, startRef] = React.useState(null);
//     const [end, endRef] = React.useState(null);
//     const [popupEventTitle, setTitle] = React.useState('');
//     const [popupEventDescription, setDescription] = React.useState('');
//     const [popupEventAllDay, setAllDay] = React.useState(true);
//     const [popupEventDate, setDate] = React.useState([]);
//     const [popupEventStatus, setStatus] = React.useState('busy');
//     const [mySelectedDate, setSelectedDate] = React.useState(now);
//     const [colorPickerOpen, setColorPickerOpen] = React.useState(false);
//     const [colorAnchor, setColorAnchor] = React.useState(null);
//     const [selectedColor, setSelectedColor] = React.useState('');
//     const [tempColor, setTempColor] = React.useState('');
//     const colorPicker = React.useRef();
//     const colorButtons = React.useMemo(() => [
//         'cancel',
//         {
//             text: 'Set',
//             keyCode: 'enter',
//             handler: () => {
//                 setSelectedColor(tempColor);
//                 setColorPickerOpen(false);
//             },
//             cssClass: 'mbsc-popup-button-primary'
//         }
//     ], [tempColor]);

//     const saveEvent = React.useCallback(() => {
//         const newEvent = {
//             id: tempEvent.id,
//             title: popupEventTitle,
//             description: popupEventDescription,
//             start: popupEventDate[0],
//             end: popupEventDate[1],
//             allDay: popupEventAllDay,
//             status: popupEventStatus,
//             color: tempEvent.color,
//             color: selectedColor
//         };
//         if (isEdit) {
//             // update the event in the list
//             const index = myEvents.findIndex(x => x.id === tempEvent.id);;
//             const newEventList = [...myEvents];

//             newEventList.splice(index, 1, newEvent);
//             setMyEvents(newEventList);
//             // here you can update the event in your storage as well
//             // ...
//         } else {
//             // add the new event to the list
//             setMyEvents([...myEvents, newEvent]);
//             // here you can add the event to your storage as well
//             // ...
//         }
//         setSelectedDate(popupEventDate[0]);
//         // close the popup
//         setOpen(false);
//     }, [isEdit, myEvents, popupEventAllDay, popupEventDate, popupEventDescription, popupEventStatus, popupEventTitle, tempEvent, selectedColor]);

//     const deleteEvent = React.useCallback((event) => {
//         setMyEvents(myEvents.filter(item => item.id !== event.id));
//         setTimeout(() => {
//             snackbar({
//                 button: {
//                     action: () => {
//                         setMyEvents(prevEvents => [...prevEvents, event]);
//                     },
//                     text: 'Undo'
//                 },
//                 message: 'Event deleted'
//             });
//         });
//     }, [myEvents]);

//     const loadPopupForm = React.useCallback((event) => {
//         setTitle(event.title);
//         setDescription(event.description);
//         setDate([event.start, event.end]);
//         setAllDay(event.allDay || false);
//         setStatus(event.status || 'busy');
//         setSelectedColor(event.color || '');
//     }, []);

//     // handle popup form changes

//     const titleChange = React.useCallback((ev) => {
//         setTitle(ev.target.value);
//     }, []);

//     const descriptionChange = React.useCallback((ev) => {
//         setDescription(ev.target.value);
//     }, []);

//     const allDayChange = React.useCallback((ev) => {
//         setAllDay(ev.target.checked);
//     }, []);

//     const dateChange = React.useCallback((args) => {
//         setDate(args.value);
//     }, []);

//     const statusChange = React.useCallback((ev) => {
//         setStatus(ev.target.value);
//     }, []);

//     const onDeleteClick = React.useCallback(() => {
//         deleteEvent(tempEvent);
//         setOpen(false);
//     }, [deleteEvent, tempEvent]);

//     // scheduler options

//     const onSelectedDateChange = React.useCallback((event) => {
//         setSelectedDate(event.date);
//     });

//     const onEventClick = React.useCallback((args) => {
//         setEdit(true);
//         setTempEvent({ ...args.event });
//         // fill popup form with event data
//         loadPopupForm(args.event);
//         setAnchor(args.domEvent.target);
//         setOpen(true);
//     }, [loadPopupForm]);

//     const onEventCreated = React.useCallback((args) => {
//         // createNewEvent(args.event, args.target)
//         setEdit(false);
//         setTempEvent(args.event)
//         // fill popup form with event data
//         loadPopupForm(args.event);
//         setAnchor(args.target);
//         // open the popup
//         setOpen(true);
//     }, [loadPopupForm]);

//     const onEventDeleted = React.useCallback((args) => {
//         deleteEvent(args.event)
//     }, [deleteEvent]);

//     const onEventUpdated = React.useCallback((args) => {
//         // here you can update the event in your storage as well, after drag & drop or resize
//         // ...
//     }, []);

//     // datepicker options
//     const controls = React.useMemo(() => popupEventAllDay ? ['date'] : ['datetime'], [popupEventAllDay]);
//     const respSetting = React.useMemo(() => popupEventAllDay ? {
//         medium: {
//             controls: ['calendar'],
//             touchUi: false
//         }
//     } : {
//             medium: {
//                 controls: ['calendar', 'time'],
//                 touchUi: false
//             }
//         }, [popupEventAllDay]);

//     // popup options
//     const headerText = React.useMemo(() => isEdit ? 'Edit event' : 'New Event', [isEdit]);
//     const popupButtons = React.useMemo(() => {
//         if (isEdit) {
//             return [
//                 'cancel',
//                 {
//                     handler: () => {
//                         saveEvent();
//                     },
//                     keyCode: 'enter',
//                     text: 'Save',
//                     cssClass: 'mbsc-popup-button-primary'
//                 }
//             ];
//         }
//         else {
//             return [
//                 'cancel',
//                 {
//                     handler: () => {
//                         saveEvent();
//                     },
//                     keyCode: 'enter',
//                     text: 'Add',
//                     cssClass: 'mbsc-popup-button-primary'
//                 }
//             ];
//         }
//     }, [isEdit, saveEvent]);

//     const onClose = React.useCallback(() => {
//         if (!isEdit) {
//             // refresh the list, if add popup was canceled, to remove the temporary event
//             setMyEvents([...myEvents]);
//         }
//         setOpen(false);
//     }, [isEdit, myEvents]);

//     const selectColor = React.useCallback((color) => {
//         setTempColor(color)
//     }, []);

//     const openColorPicker = React.useCallback((ev) => {
//         selectColor(selectedColor || '');
//         setColorAnchor(ev.currentTarget);
//         setColorPickerOpen(true);
//     }, [selectColor, selectedColor]);

//     const changeColor = React.useCallback((ev) => {
//         const color = ev.currentTarget.getAttribute('data-value');
//         selectColor(color);
//         if (!colorPicker.current.s.buttons.length) {
//             setSelectedColor(color);
//             setColorPickerOpen(false);
//         }
//     }, [selectColor, setSelectedColor]);

//     return <div>
//         <Eventcalendar
//             view={viewSettings}
//             data={myEvents}
//             clickToCreate="double"
//             dragToCreate={true}
//             dragToMove={true}
//             dragToResize={true}
//             selectedDate={mySelectedDate}
//             onSelectedDateChange={onSelectedDateChange}
//             onEventClick={onEventClick}
//             onEventCreated={onEventCreated}
//             onEventDeleted={onEventDeleted}
//             onEventUpdated={onEventUpdated}
//         />
//         <Popup
//             display="bottom"
//             fullScreen={true}
//             contentPadding={false}
//             headerText={headerText}
//             anchor={anchor}
//             buttons={popupButtons}
//             isOpen={isOpen}
//             onClose={onClose}
//             responsive={responsivePopup}
//         >
//             <div className="mbsc-form-group">
//                 <Input label="Title" value={popupEventTitle} onChange={titleChange} />
//                 <Textarea label="Description" value={popupEventDescription} onChange={descriptionChange} />
//             </div>
//             <div className="mbsc-form-group">
//                 <Switch label="All-day" checked={popupEventAllDay} onChange={allDayChange} />
//                 <Input ref={startRef} label="Starts" />
//                 <Input ref={endRef} label="Ends" />
//                 <Datepicker
//                     select="range"
//                     controls={controls}
//                     touchUi={true}
//                     startInput={start}
//                     endInput={end}
//                     showRangeLabels={false}
//                     responsive={respSetting}
//                     onChange={dateChange}
//                     value={popupEventDate}
//                 />
//                 <div onClick={openColorPicker} className="event-color-c">
//                     <div className="event-color-label">Color</div>
//                     <div className="event-color" style={{ background: selectedColor }}></div>
//                 </div>
//                 <SegmentedGroup onChange={statusChange}>
//                     <SegmentedItem value="busy" checked={popupEventStatus === 'busy'}>Show as busy</SegmentedItem>
//                     <SegmentedItem value="free" checked={popupEventStatus === 'free'}>Show as free</SegmentedItem>
//                 </SegmentedGroup>
//                 {isEdit ? <div className="mbsc-button-group"><Button className="mbsc-button-block" color="danger" variant="outline" onClick={onDeleteClick}>Delete event</Button></div> : null}
//             </div>
//         </Popup>
//         <Popup
//             display="bottom"
//             contentPadding={false}
//             showArrow={false}
//             showOverlay={false}
//             anchor={colorAnchor}
//             isOpen={colorPickerOpen}
//             buttons={colorButtons}
//             responsive={colorPopup}
//             ref={colorPicker}
//         >
//             <div className="crud-color-row">
//                 {colors.map((color, index) => {
//                     if (index < 5) {
//                         return <div key={index} onClick={changeColor} className={"crud-color-c " + (tempColor === color ? 'selected' : '')} data-value={color}>
//                             <div className="crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check" style={{ background: color }}></div>
//                         </div>
//                     } else return null;
//                 })}
//             </div>
//             <div className="crud-color-row">
//                 {colors.map((color, index) => {
//                     if (index >= 5) {
//                         return <div key={index} onClick={changeColor} className={"crud-color-c " + (tempColor === color ? 'selected' : '')} data-value={color}>
//                             <div className="crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check" style={{ background: color }}></div>
//                         </div>
//                     } else return null;
//                 })}
//             </div>
//         </Popup>
//     </div>
// }

// export default Calendar;





























import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Autocomplete, Button } from "@mui/material";
import * as spotStore from "../../store/spot";
import TextField from '@mui/material/TextField';
import { directions } from "../foredata";
import * as calendarStore from "../../store/calendar";
import * as calendarActions from "../../store/calendar";
import Chip from '@mui/material/Chip';

function Calendar() {


  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const spotReducer = useSelector((state) => state.spotReducer);
  let spots = spotReducer?.allSpots
  const [spotState, setSpotState] = useState(spots);
  const [isShown, setIsShown] = useState('');
  const [ latt, setLatt] = useState(41)
  const [ long, setLong ] = useState(-89)
  const [ markers, setMarkers ] = useState([])
  const [key, setKey] = useState();
  const [checked, setChecked] = useState(false);


  const calendarReducer = useSelector((state) => state.calendarReducer);
  let calendars = calendarReducer?.allCalendars
  const [calendarState, setCalendarState] = useState(calendars);

  if(!calendars){
    dispatch(calendarStore.thunk_getAllCalendars());
  }

  useEffect(() => {
    dispatch(calendarStore.thunk_getAllCalendars());
    setCalendarState(calendarReducer?.allCalendars)
    console.log(calendars)
  }, [dispatch]);



let trialOne;
let trialTwo;
let trialThree;
let trialFour;
let trialFive;
let trialSix;
let trialSeven;
let trialEight;
let trialNine;
let trialTen;
let trialEleven;
let trialTwelve;
let trialThirteen;
let trialFourteen;
let trialFifteen;
let trialSixteen;
let trialSeventeen;
let trialEighteen;
let trialNineteen;
let trialTwenty;
let trialTwentyOne;
let trialTwentyTwo;
let trialTwentyThree;
let trialTwentyFour;
let trialTwentyFive;
let trialTwentySix;
let trialTwentySeven;
let trialTwentyEight;
let trialTwentyNine;
let trialThirty;
let trialThirtyOne;
let trialThirtyTwo;
let trialThirtyThree;
let trialThirtyFour;
let trialThirtyFive;
let trialThirtySix;
let trialThirtySeven;
let trialThirtyEight;
let trialThirtyNine;
let trialFourty;
let trialFourtyOne;
let trialFourtyTwo;
let trialFourtyThree;
let trialFourtyFour;
let trialFourtyFive;
let trialFourtySix;
let trialFourtySeven;
let trialFourtyEight;
let trialFourtyNine;
let trialFifty;
let trialFiftyOne;
let trialFiftyTwo;
let trialFiftyThree;
let trialFiftyFour;
let trialFiftyFive;
let trialFiftySix;
let trialFiftySeven;
let trialFiftyEight;
let trialFiftyNine;
let trialSixty;
let trialSixtyOne;
let trialSixtyTwo;
let trialSixtyThree;
let trialSixtyFour;
let trialSixtyFive;
let trialSixtySix;
let trialSixtySeven;
let trialSixtyEight;
let trialSixtyNine;
let trialSeventy;
let trialSeventyOne;
let trialSeventyTwo;
let trialSeventyThree;
let trialSeventyFour;
let trialSeventyFive;
let trialSeventySix;
let trialSeventySeven;
let trialSeventyEight;
let trialSeventyNine;
let trialEighty;
let trialEightyOne;
let trialEightyTwo;
let trialEightyThree;
let trialEightyFour;
let trialEightyFive;
let trialEightySix;
let trialEightySeven;
let trialEightyEight;
let trialEightyNine;
let trialNinety;
let trialNinetyOne;
let trialNinetyTwo;
let trialNinetyThree;
let trialNinetyFour;
let trialNinetyFive;
let trialNinetySix;
let trialNinetySeven;
let trialNinetyEight;
let trialNinetyNine;
let trialOneHundred;
let trialOneHundredOne;
let trialOneHundredTwo;
let trialOneHundredThree;
let trialOneHundredFour;
let trialOneHundredFive;
let trialOneHundredSix;
let trialOneHundredSeven;
let trialOneHundredEight;
let trialOneHundredNine;
let trialOneHundredTen;
let trialOneHundredEleven;
let trialOneHundredTwelve;
let trialOneHundredThirteen;
let trialOneHundredFourteen;
let trialOneHundredFifteen;
let trialOneHundredSixteen;
let trialOneHundredSeventeen;
let trialOneHundredEighteen;
let trialOneHundredNineteen;
let trialOneHundredTwenty;
let trialOneHundredTwentyOne;
let trialOneHundredTwentyTwo;
let trialOneHundredTwentyThree;
let trialOneHundredTwentyFour;
let trialOneHundredTwentyFive;
let trialOneHundredTwentySix;
let trialOneHundredTwentySeven;
let trialOneHundredTwentyEight;
let trialOneHundredTwentyNine;
let trialOneHundredThirty;
let trialOneHundredThirtyOne;
let trialOneHundredThirtyTwo;
let trialOneHundredThirtyThree;
let trialOneHundredThirtyFour;
let trialOneHundredThirtyFive;
let trialOneHundredThirtySix;
let trialOneHundredThirtySeven;
let trialOneHundredThirtyEight;
let trialOneHundredThirtyNine;
let trialOneHundredFourty;
let trialOneHundredFourtyOne;
let trialOneHundredFourtyTwo;
let trialOneHundredFourtyThree;
let trialOneHundredFourtyFour;
let trialOneHundredFourtyFive;
let trialOneHundredFourtySix;
let trialOneHundredFourtySeven;
let trialOneHundredFourtyEight;
let trialOneHundredFourtyNine;
let trialOneHundredFifty;
let trialOneHundredFiftyOne;
let trialOneHundredFiftyTwo;
let trialOneHundredFiftyThree;
let trialOneHundredFiftyFour;
let trialOneHundredFiftyFive;
let trialOneHundredFiftySix;
let trialOneHundredFiftySeven;
let trialOneHundredFiftyEight;
let trialOneHundredFiftyNine;
let trialOneHundredSixty;
let trialOneHundredSixtyOne;
let trialOneHundredSixtyTwo;
let trialOneHundredSixtyThree;
let trialOneHundredSixtyFour;
let trialOneHundredSixtyFive;
let trialOneHundredSixtySix;
let trialOneHundredSixtySeven;
let trialOneHundredSixtyEight;
let trialOneHundredSixtyNine;
let trialOneHundredSeventy;
let trialOneHundredSeventyOne;
let trialOneHundredSeventyTwo;
let trialOneHundredSeventyThree;
let trialOneHundredSeventyFour;
let trialOneHundredSeventyFive;
let trialOneHundredSeventySix;
let trialOneHundredSeventySeven;
let trialOneHundredSeventyEight;
let trialOneHundredSeventyNine
let trialOneHundredEighty;

calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOne = spot.calOne : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialTwo = spot.calTwo : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialThree = spot.calThree : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialFour = spot.calFour : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialFive = spot.calFive : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialSix = spot.calSix : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialSeven = spot.calSeven : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialEight = spot.calEight : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialNine = spot.calNine : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialTen = spot.calTen : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialEleven = spot.calEleven : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialTwelve = spot.calTwelve : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialThirteen = spot.calThirteen : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialFourteen = spot.calFourteen : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialFifteen = spot.calFifteen : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialSixteen = spot.calSixteen : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialSeventeen = spot.calSeventeen : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialEighteen = spot.calEighteen : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialNineteen = spot.calNineteen : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialTwenty = spot.calTwenty : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialTwentyOne = spot.calTwentyOne : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialTwentyTwo = spot.calTwentyTwo : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialTwentyThree = spot.calTwentyThree : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialTwentyFour = spot.calTwentyFour : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialTwentyFive = spot.calTwentyFive : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialTwentySix = spot.calTwentySix : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialTwentySeven = spot.calTwentySeven : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialTwentyEight = spot.calTwentyEight : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialTwentyNine = spot.calTwentyNine : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialThirty = spot.calThirty : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialThirtyOne = spot.calThirtyOne : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialThirtyTwo = spot.calThirtyTwo : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialThirtyThree = spot.calThirtyThree : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialThirtyFour = spot.calThirtyFour : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialThirtyFive = spot.calThirtyFive : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialThirtySix = spot.calThirtySix : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialThirtySeven = spot.calThirtySeven : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialThirtyEight = spot.calThirtyEight : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialThirtyNine = spot.calThirtyNine : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialFourty = spot.calFourty : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialFourtyOne = spot.calFourtyOne : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialFourtyTwo = spot.calFourtyTwo : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialFourtyThree = spot.calFourtyThree : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialFourtyFour = spot.calFourtyFour : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialFourtyFive = spot.calFourtyFive : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialFourtySix = spot.calFourtySix : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialFourtySeven = spot.calFourtySeven : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialFourtyEight = spot.calFourtyEight : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialFourtyNine = spot.calFourtyNine : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialFifty = spot.calFifty : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialFiftyOne = spot.calFiftyOne : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialFiftyTwo = spot.calFiftyTwo : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialFiftyThree = spot.calFiftyThree : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialFiftyFour = spot.calFiftyFour : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialFiftyFive = spot.calFiftyFive : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialFiftySix = spot.calFiftySix : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialFiftySeven = spot.calFiftySeven : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialFiftyEight = spot.calFiftyEight : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialFiftyNine = spot.calFiftyNine : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialSixty = spot.calSixty : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialSixtyOne = spot.calSixtyOne : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialSixtyTwo = spot.calSixtyTwo : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialSixtyThree = spot.calSixtyThree : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialSixtyFour = spot.calSixtyFour : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialSixtyFive = spot.calSixtyFive : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialSixtySix = spot.calSixtySix : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialSixtySeven = spot.calSixtySeven : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialSixtyEight = spot.calSixtyEight : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialSixtyNine = spot.calSixtyNine : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialSeventy = spot.calSeventy : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialSeventyOne = spot.calSeventyOne : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialSeventyTwo = spot.calSeventyTwo : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialSeventyThree = spot.calSeventyThree : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialSeventyFour = spot.calSeventyFour : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialSeventyFive = spot.calSeventyFive : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialSeventySix = spot.calSeventySix : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialSeventySeven = spot.calSeventySeven : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialSeventyEight = spot.calSeventyEight : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialSeventyNine = spot.calSeventyNine : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialEighty = spot.calEighty : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialEightyOne = spot.calEightyOne : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialEightyTwo = spot.calEightyTwo : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialEightyThree = spot.calEightyThree : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialEightyFour = spot.calEightyFour : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialEightyFive = spot.calEightyFive : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialEightySix = spot.calEightySix : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialEightySeven = spot.calEightySeven : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialEightyEight = spot.calEightyEight : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialEightyNine = spot.calEightyNine : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialNinety = spot.calNinety : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialNinetyOne = spot.calNinetyOne : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialNinetyTwo = spot.calNinetyTwo : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialNinetyThree = spot.calNinetyThree : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialNinetyFour = spot.calNinetyFour : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialNinetyFive = spot.calNinetyFive : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialNinetySix = spot.calNinetySix : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialNinetySeven = spot.calNinetySeven : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialNinetyEight = spot.calNinetyEight : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialNinetyNine = spot.calNinetyNine : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundred = spot.calOneHundred : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredOne = spot.calOneHundredOne : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredTwo = spot.calOneHundredTwo : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredThree = spot.calOneHundredThree : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredFour = spot.calOneHundredFour : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredFive = spot.calOneHundredFive : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredSix = spot.calOneHundredSix : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredSeven = spot.calOneHundredSeven : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredEight = spot.calOneHundredEight : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredNine = spot.calOneHundredNine : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredTen = spot.calOneHundredTen : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredEleven = spot.calOneHundredEleven : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredTwelve = spot.calOneHundredTwelve : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredThirteen = spot.calOneHundredThirteen : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredFourteen = spot.calOneHundredFourteen : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredFifteen = spot.calOneHundredFifteen : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredSixteen = spot.calOneHundredSixteen : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredSeventeen = spot.calOneHundredSeventeen : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredEighteen = spot.calOneHundredEighteen : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredNineteen = spot.calOneHundredNineteen : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredTwenty = spot.calOneHundredTwenty : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredTwentyOne = spot.calOneHundredTwentyOne : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredTwentyTwo = spot.calOneHundredTwentyTwo : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredTwentyThree = spot.calOneHundredTwentyThree : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredTwentyFour = spot.calOneHundredTwentyFour : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredTwentyFive = spot.calOneHundredTwentyFive : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredTwentySix = spot.calOneHundredTwentySix : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredTwentySeven = spot.calOneHundredTwentySeven : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredTwentyEight = spot.calOneHundredTwentyEight : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredTwentyNine = spot.calOneHundredTwentyNine : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredThirty = spot.calOneHundredThirty : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredThirtyOne = spot.calOneHundredThirtyOne : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredThirtyTwo = spot.calOneHundredThirtyTwo : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredThirtyThree = spot.calOneHundredThirtyThree : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredThirtyFour = spot.calOneHundredThirtyFour : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredThirtyFive = spot.calOneHundredThirtyFive : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredThirtySix = spot.calOneHundredThirtySix : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredThirtySeven = spot.calOneHundredThirtySeven : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredThirtyEight = spot.calOneHundredThirtyEight : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredThirtyNine = spot.calOneHundredThirtyNine : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredFourty = spot.calOneHundredFourty : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredFourtyOne = spot.calOneHundredFourtyOne : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredFourtyTwo = spot.calOneHundredFourtyTwo : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredFourtyThree = spot.calOneHundredFourtyThree : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredFourtyFour = spot.calOneHundredFourtyFour : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredFourtyFive = spot.calOneHundredFourtyFive : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredFourtySix = spot.calOneHundredFourtySix : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredFourtySeven = spot.calOneHundredFourtySeven : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredFourtyEight = spot.calOneHundredFourtyEight : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredFourtyNine = spot.calOneHundredFourtyNine : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredFifty = spot.calOneHundredFifty : null))
calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredFiftyOne = spot.calOneHundredFiftyOne : null))
// calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredFiftyTwo = spot.calOneHundredFiftyTwo : null))
// calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredFiftyThree = spot.calOneHundredFiftyThree : null))
// calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredFiftyFour = spot.calOneHundredFiftyFour : null))
// calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredFiftyFive = spot.calOneHundredFiftyFive : null))
// calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredFiftySix = spot.calOneHundredFiftySix : null))
// calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredFiftySeven = spot.calOneHundredFiftySeven : null))
// calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredFiftyEight = spot.calOneHundredFiftyEight : null))
// calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredFiftyNine = spot.calOneHundredFiftyNine : null))
// calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredSixty = spot.calOneHundredSixty : null))
// calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredSixtyOne = spot.calOneHundredSixtyOne : null))
// calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredSixtyTwo = spot.calOneHundredSixtyTwo : null))
// calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredSixtyThree = spot.calOneHundredSixtyThree : null))
// calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredSixtyFour = spot.calOneHundredSixtyFour : null))
// calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredSixtyFive = spot.calOneHundredSixtyFive : null))
// calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredSixtySix = spot.calOneHundredSixtySix : null))
// calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredSixtySeven = spot.calOneHundredSixtySeven : null))
// calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredSixtyEight = spot.calOneHundredSixtyEight : null))
// calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredSixtyNine = spot.calOneHundredSixtyNine : null))
// calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredSeventy = spot.calOneHundredSeventy : null))
// calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredSeventyOne = spot.calOneHundredSeventyOne : null))
// calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredSeventyTwo = spot.calOneHundredSeventyTwo : null))
// calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredSeventyThree = spot.calOneHundredSeventyThree : null))
// calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredSeventyFour = spot.calOneHundredSeventyFour : null))
// calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredSeventyFive = spot.calOneHundredSeventyFive : null))
// calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredSeventySix = spot.calOneHundredSeventySix : null))
// calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredSeventySeven = spot.calOneHundredSeventySeven : null))
// calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredSeventyEight = spot.calOneHundredSeventyEight : null))
// calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredSeventyNine = spot.calOneHundredSeventyNine : null))
// calendarState && calendarState.map((spot,key) => ( key == 0 ? trialOneHundredEighty = spot.calOneHundredEighty : null))
const [calOne , setCalOne ]=useState(trialOne)

const [calTwo , setCalTwo ]=useState(trialTwo)
const [calThree , setCalThree ]=useState(trialThree)
const [calFour , setCalFour ]=useState(trialFour)
const [calFive , setCalFive ]=useState(trialFive)
const [calSix , setCalSix ]=useState(trialSix)
const [calSeven , setCalSeven ]=useState(trialSeven)
const [calEight , setCalEight ]=useState(trialEight)
const [calNine , setCalNine ]=useState(trialNine)
const [calTen , setCalTen ]=useState(trialTen)
const [calEleven , setCalEleven ]=useState(trialEleven)
const [calTwelve , setCalTwelve ]=useState(trialTwelve)
const [calThirteen , setCalThirteen ]=useState(trialThirteen)
const [calFourteen , setCalFourteen ]=useState(trialFourteen)
const [calFifteen , setCalFifteen ]=useState(trialFifteen)
const [calSixteen , setCalSixteen ]=useState(trialSixteen)
const [calSeventeen , setCalSeventeen ]=useState(trialSeventeen)
const [calEighteen , setCalEighteen ]=useState(trialEighteen)
const [calNineteen , setCalNineteen ]=useState(trialNineteen)
const [calTwenty , setCalTwenty ]=useState(trialTwenty)
const [calTwentyOne , setCalTwentyOne ]=useState(trialTwentyOne)
const [calTwentyTwo , setCalTwentyTwo ]=useState(trialTwentyTwo)
const [calTwentyThree , setCalTwentyThree ]=useState(trialTwentyThree)
const [calTwentyFour , setCalTwentyFour ]=useState(trialTwentyFour)
const [calTwentyFive , setCalTwentyFive ]=useState(trialTwentyFive)
const [calTwentySix , setCalTwentySix ]=useState(trialTwentySix)
const [calTwentySeven , setCalTwentySeven ]=useState(trialTwentySeven)
const [calTwentyEight , setCalTwentyEight ]=useState(trialTwentyEight)
const [calTwentyNine , setCalTwentyNine ]=useState(trialTwentyNine)
const [calThirty , setCalThirty ]=useState(trialThirty)
const [calThirtyOne , setCalThirtyOne ]=useState(trialThirtyOne)
const [calThirtyTwo , setCalThirtyTwo ]=useState(trialThirtyTwo)
const [calThirtyThree , setCalThirtyThree ]=useState(trialThirtyThree)
const [calThirtyFour , setCalThirtyFour ]=useState(trialThirtyFour)
const [calThirtyFive , setCalThirtyFive ]=useState(trialThirtyFive)
const [calThirtySix , setCalThirtySix ]=useState(trialThirtySix)
const [calThirtySeven , setCalThirtySeven ]=useState(trialThirtySeven)
const [calThirtyEight , setCalThirtyEight ]=useState(trialThirtyEight)
const [calThirtyNine , setCalThirtyNine ]=useState(trialThirtyNine)
const [calFourty , setCalFourty ]=useState(trialFourty)
const [calFourtyOne , setCalFourtyOne ]=useState(trialFourtyOne)
const [calFourtyTwo , setCalFourtyTwo ]=useState(trialFourtyTwo)
const [calFourtyThree , setCalFourtyThree ]=useState(trialFourtyThree)
const [calFourtyFour , setCalFourtyFour ]=useState(trialFourtyFour)
const [calFourtyFive , setCalFourtyFive ]=useState(trialFourtyFive)
const [calFourtySix , setCalFourtySix ]=useState(trialFourtySix)
const [calFourtySeven , setCalFourtySeven ]=useState(trialFourtySeven)
const [calFourtyEight , setCalFourtyEight ]=useState(trialFourtyEight)
const [calFourtyNine , setCalFourtyNine ]=useState(trialFourtyNine)
const [calFifty , setCalFifty ]=useState(trialFifty)
const [calFiftyOne , setCalFiftyOne ]=useState(trialFiftyOne)
const [calFiftyTwo , setCalFiftyTwo ]=useState(trialFiftyTwo)
const [calFiftyThree , setCalFiftyThree ]=useState(trialFiftyThree)
const [calFiftyFour , setCalFiftyFour ]=useState(trialFiftyFour)
const [calFiftyFive , setCalFiftyFive ]=useState(trialFiftyFive)
const [calFiftySix , setCalFiftySix ]=useState(trialFiftySix)
const [calFiftySeven , setCalFiftySeven ]=useState(trialFiftySeven)
const [calFiftyEight , setCalFiftyEight ]=useState(trialFiftyEight)
const [calFiftyNine , setCalFiftyNine ]=useState(trialFiftyNine)
const [calSixty , setCalSixty ]=useState(trialSixty)
const [calSixtyOne , setCalSixtyOne ]=useState(trialSixtyOne)
const [calSixtyTwo , setCalSixtyTwo ]=useState(trialSixtyTwo)
const [calSixtyThree , setCalSixtyThree ]=useState(trialSixtyThree)
const [calSixtyFour , setCalSixtyFour ]=useState(trialSixtyFour)
const [calSixtyFive , setCalSixtyFive ]=useState(trialSixtyFive)
const [calSixtySix , setCalSixtySix ]=useState(trialSixtySix)
const [calSixtySeven , setCalSixtySeven ]=useState(trialSixtySeven)
const [calSixtyEight , setCalSixtyEight ]=useState(trialSixtyEight)
const [calSixtyNine , setCalSixtyNine ]=useState(trialSixtyNine)
const [calSeventy , setCalSeventy ]=useState(trialSeventy)
const [calSeventyOne , setCalSeventyOne ]=useState(trialSeventyOne)
const [calSeventyTwo , setCalSeventyTwo ]=useState(trialSeventyTwo)
const [calSeventyThree , setCalSeventyThree ]=useState(trialSeventyThree)
const [calSeventyFour , setCalSeventyFour ]=useState(trialSeventyFour)
const [calSeventyFive , setCalSeventyFive ]=useState(trialSeventyFive)
const [calSeventySix , setCalSeventySix ]=useState(trialSeventySix)
const [calSeventySeven , setCalSeventySeven ]=useState(trialSeventySeven)
const [calSeventyEight , setCalSeventyEight ]=useState(trialSeventyEight)
const [calSeventyNine , setCalSeventyNine ]=useState(trialSeventyNine)
const [calEighty , setCalEighty ]=useState(trialEighty)
const [calEightyOne , setCalEightyOne ]=useState(trialEightyOne)
const [calEightyTwo , setCalEightyTwo ]=useState(trialEightyTwo)
const [calEightyThree , setCalEightyThree ]=useState(trialEightyThree)
const [calEightyFour , setCalEightyFour ]=useState(trialEightyFour)
const [calEightyFive , setCalEightyFive ]=useState(trialEightyFive)
const [calEightySix , setCalEightySix ]=useState(trialEightySix)
const [calEightySeven , setCalEightySeven ]=useState(trialEightySeven)
const [calEightyEight , setCalEightyEight ]=useState(trialEightyEight)
const [calEightyNine , setCalEightyNine ]=useState(trialEightyNine)
const [calNinety , setCalNinety ]=useState(trialNinety)
const [calNinetyOne , setCalNinetyOne ]=useState(trialNinetyOne)
const [calNinetyTwo , setCalNinetyTwo ]=useState(trialNinetyTwo)
const [calNinetyThree , setCalNinetyThree ]=useState(trialNinetyThree)
const [calNinetyFour , setCalNinetyFour ]=useState(trialNinetyFour)
const [calNinetyFive , setCalNinetyFive ]=useState(trialNinetyFive)
const [calNinetySix , setCalNinetySix ]=useState(trialNinetySix)
const [calNinetySeven , setCalNinetySeven ]=useState(trialNinetySeven)
const [calNinetyEight , setCalNinetyEight ]=useState(trialNinetyEight)
const [calNinetyNine , setCalNinetyNine ]=useState(trialNinetyNine)
const [calOneHundred , setCalOneHundred ]=useState(trialOneHundred)
const [calOneHundredOne , setCalOneHundredOne ]=useState(trialOneHundredOne)
const [calOneHundredTwo , setCalOneHundredTwo ]=useState(trialOneHundredTwo)
const [calOneHundredThree , setCalOneHundredThree ]=useState(trialOneHundredThree)
const [calOneHundredFour , setCalOneHundredFour ]=useState(trialOneHundredFour)
const [calOneHundredFive , setCalOneHundredFive ]=useState(trialOneHundredFive)
const [calOneHundredSix , setCalOneHundredSix ]=useState(trialOneHundredSix)
const [calOneHundredSeven , setCalOneHundredSeven ]=useState(trialOneHundredSeven)
const [calOneHundredEight , setCalOneHundredEight ]=useState(trialOneHundredEight)
const [calOneHundredNine , setCalOneHundredNine ]=useState(trialOneHundredNine)
const [calOneHundredTen , setCalOneHundredTen ]=useState(trialOneHundredTen)
const [calOneHundredEleven , setCalOneHundredEleven ]=useState(trialOneHundredEleven)
const [calOneHundredTwelve , setCalOneHundredTwelve ]=useState(trialOneHundredTwelve)
const [calOneHundredThirteen , setCalOneHundredThirteen ]=useState(trialOneHundredThirteen)
const [calOneHundredFourteen , setCalOneHundredFourteen ]=useState(trialOneHundredFourteen)
const [calOneHundredFifteen , setCalOneHundredFifteen ]=useState(trialOneHundredFifteen)
const [calOneHundredSixteen , setCalOneHundredSixteen ]=useState(trialOneHundredSixteen)
const [calOneHundredSeventeen , setCalOneHundredSeventeen ]=useState(trialOneHundredSeventeen)
const [calOneHundredEighteen , setCalOneHundredEighteen ]=useState(trialOneHundredEighteen)
const [calOneHundredNineteen , setCalOneHundredNineteen ]=useState(trialOneHundredNineteen)
const [calOneHundredTwenty , setCalOneHundredTwenty ]=useState(trialOneHundredTwenty)
const [calOneHundredTwentyOne , setCalOneHundredTwentyOne ]=useState(trialOneHundredTwentyOne)
const [calOneHundredTwentyTwo , setCalOneHundredTwentyTwo ]=useState(trialOneHundredTwentyTwo)
const [calOneHundredTwentyThree , setCalOneHundredTwentyThree ]=useState(trialOneHundredTwentyThree)
const [calOneHundredTwentyFour , setCalOneHundredTwentyFour ]=useState(trialOneHundredTwentyFour)
const [calOneHundredTwentyFive , setCalOneHundredTwentyFive ]=useState(trialOneHundredTwentyFive)
const [calOneHundredTwentySix , setCalOneHundredTwentySix ]=useState(trialOneHundredTwentySix)
const [calOneHundredTwentySeven , setCalOneHundredTwentySeven ]=useState(trialOneHundredTwentySeven)
const [calOneHundredTwentyEight , setCalOneHundredTwentyEight ]=useState(trialOneHundredTwentyEight)
const [calOneHundredTwentyNine , setCalOneHundredTwentyNine ]=useState(trialOneHundredTwentyNine)
const [calOneHundredThirty , setCalOneHundredThirty ]=useState(trialOneHundredThirty)
const [calOneHundredThirtyOne , setCalOneHundredThirtyOne ]=useState(trialOneHundredThirtyOne)
const [calOneHundredThirtyTwo , setCalOneHundredThirtyTwo ]=useState(trialOneHundredThirtyTwo)
const [calOneHundredThirtyThree , setCalOneHundredThirtyThree ]=useState(trialOneHundredThirtyThree)
const [calOneHundredThirtyFour , setCalOneHundredThirtyFour ]=useState(trialOneHundredThirtyFour)
const [calOneHundredThirtyFive , setCalOneHundredThirtyFive ]=useState(trialOneHundredThirtyFive)
const [calOneHundredThirtySix , setCalOneHundredThirtySix ]=useState(trialOneHundredThirtySix)
const [calOneHundredThirtySeven , setCalOneHundredThirtySeven ]=useState(trialOneHundredThirtySeven)
const [calOneHundredThirtyEight , setCalOneHundredThirtyEight ]=useState(trialOneHundredThirtyEight)
const [calOneHundredThirtyNine , setCalOneHundredThirtyNine ]=useState(trialOneHundredThirtyNine)
const [calOneHundredFourty , setCalOneHundredFourty ]=useState(trialOneHundredFourty)
const [calOneHundredFourtyOne , setCalOneHundredFourtyOne ]=useState(trialOneHundredFourtyOne)
const [calOneHundredFourtyTwo , setCalOneHundredFourtyTwo ]=useState(trialOneHundredFourtyTwo)
const [calOneHundredFourtyThree , setCalOneHundredFourtyThree ]=useState(trialOneHundredFourtyThree)
const [calOneHundredFourtyFour , setCalOneHundredFourtyFour ]=useState(trialOneHundredFourtyFour)
const [calOneHundredFourtyFive , setCalOneHundredFourtyFive ]=useState(trialOneHundredFourtyFive)
const [calOneHundredFourtySix , setCalOneHundredFourtySix ]=useState(trialOneHundredFourtySix)
const [calOneHundredFourtySeven , setCalOneHundredFourtySeven ]=useState(trialOneHundredFourtySeven)
const [calOneHundredFourtyEight , setCalOneHundredFourtyEight ]=useState(trialOneHundredFourtyEight)
const [calOneHundredFourtyNine , setCalOneHundredFourtyNine ]=useState(trialOneHundredFourtyNine)
const [calOneHundredFifty , setCalOneHundredFifty ]=useState(trialOneHundredFifty)
const [calOneHundredFiftyOne , setCalOneHundredFiftyOne ]=useState(trialOneHundredFiftyOne)
const [calOneHundredFiftyTwo , setCalOneHundredFiftyTwo ]=useState(trialOneHundredFiftyTwo)
const [calOneHundredFiftyThree , setCalOneHundredFiftyThree ]=useState(trialOneHundredFiftyThree)
const [calOneHundredFiftyFour , setCalOneHundredFiftyFour ]=useState(trialOneHundredFiftyFour)
const [calOneHundredFiftyFive , setCalOneHundredFiftyFive ]=useState(trialOneHundredFiftyFive)
const [calOneHundredFiftySix , setCalOneHundredFiftySix ]=useState(trialOneHundredFiftySix)
const [calOneHundredFiftySeven , setCalOneHundredFiftySeven ]=useState(trialOneHundredFiftySeven)
const [calOneHundredFiftyEight , setCalOneHundredFiftyEight ]=useState(trialOneHundredFiftyEight)
const [calOneHundredFiftyNine , setCalOneHundredFiftyNine ]=useState(trialOneHundredFiftyNine )
const [calOneHundredSixty , setCalOneHundredSixty ]=useState(trialOneHundredSixty)
const [calOneHundredSixtyOne , setCalOneHundredSixtyOne ]=useState(trialOneHundredSixtyOne)
const [calOneHundredSixtyTwo , setCalOneHundredSixtyTwo ]=useState(trialOneHundredSixtyTwo)
const [calOneHundredSixtyThree , setCalOneHundredSixtyThree ]=useState(trialOneHundredSixtyThree)
const [calOneHundredSixtyFour , setCalOneHundredSixtyFour ]=useState(trialOneHundredSixtyFour)
const [calOneHundredSixtyFive , setCalOneHundredSixtyFive ]=useState(trialOneHundredSixtyFive)
const [calOneHundredSixtySix , setCalOneHundredSixtySix ]=useState(trialOneHundredSixtySix)
const [calOneHundredSixtySeven , setCalOneHundredSixtySeven ]=useState(trialOneHundredSixtySeven)
const [calOneHundredSixtyEight , setCalOneHundredSixtyEight ]=useState(trialOneHundredSixtyEight)
const [calOneHundredSixtyNine , setCalOneHundredSixtyNine ]=useState(trialOneHundredSixtyNine)
const [calOneHundredSeventy , setCalOneHundredSeventy ]=useState(trialOneHundredSeventy)
const [calOneHundredSeventyOne , setCalOneHundredSeventyOne ]=useState(trialOneHundredSeventyOne)
const [calOneHundredSeventyTwo , setCalOneHundredSeventyTwo ]=useState(trialOneHundredSeventyTwo)
const [calOneHundredSeventyThree , setCalOneHundredSeventyThree ]=useState(trialOneHundredSeventyThree)
const [calOneHundredSeventyFour , setCalOneHundredSeventyFour ]=useState(trialOneHundredSeventyFour)
const [calOneHundredSeventyFive , setCalOneHundredSeventyFive ]=useState(trialOneHundredSeventyFive)
const [calOneHundredSeventySix , setCalOneHundredSeventySix ]=useState(trialOneHundredSeventySix)
const [calOneHundredSeventySeven , setCalOneHundredSeventySeven ]=useState(trialOneHundredSeventySeven)
const [calOneHundredSeventyEight , setCalOneHundredSeventyEight ]=useState(trialOneHundredSeventyEight)
const [calOneHundredSeventyNine , setCalOneHundredSeventyNine ]=useState(trialOneHundredSeventyNine)
const [calOneHundredEighty , setCalOneHundredEighty ]=useState(trialOneHundredEighty)






const handleSubmite = async (e) => {
  e.preventDefault();
  const userId = user.id;

  //setting images 1-3 to urls submitted on a spot


  //front-end validations
  const validationErrors = []

  if (!validationErrors.length) {
    await dispatch(
      calendarActions.thunk_addCalendar({
        userId,
        calOne,
        calTwo,
        calThree,
        calFour,
        calFive,
        calSix,
        calSeven,
calEight,
calNine,
calTen,
calEleven,
calTwelve,
calThirteen,
calFourteen,
calFifteen,
calSixteen,
calSeventeen,
calEighteen,
calNineteen,
calTwenty,
calTwentyOne,
calTwentyTwo,
calTwentyThree,
calTwentyFour,
calTwentyFive,
calTwentySix,
calTwentySeven,
calTwentyEight,
calTwentyNine,
calThirty,
calThirtyOne,
calThirtyTwo,
calThirtyThree,
calThirtyFour,
calThirtyFive,
calThirtySix,
calThirtySeven,
calThirtyEight,
calThirtyNine,
calFourty,
calFourtyOne,
calFourtyTwo,
calFourtyThree,
calFourtyFour,
calFourtyFive,
calFourtySix,
calFourtySeven,
calFourtyEight,
calFourtyNine,
calFifty,
calFiftyOne,
calFiftyTwo,
calFiftyThree,
calFiftyFour,
calFiftyFive,
calFiftySix,
calFiftySeven,
calFiftyEight,
calFiftyNine,
calSixty,
calSixtyOne,
calSixtyTwo,
calSixtyThree,
calSixtyFour,
calSixtyFive,
calSixtySix,
calSixtySeven,
calSixtyEight,
calSixtyNine,
calSeventy,
calSeventyOne,
calSeventyTwo,
calSeventyThree,
calSeventyFour,
calSeventyFive,
calSeventySix,
calSeventySeven,
calSeventyEight,
calSeventyNine,
calEighty,
calEightyOne,
calEightyTwo,
calEightyThree,
calEightyFour,
calEightyFive,
calEightySix,
calEightySeven,
calEightyEight,
calEightyNine,
calNinety,
calNinetyOne,
calNinetyTwo,
calNinetyThree,
calNinetyFour,
calNinetyFive,
calNinetySix,
calNinetySeven,
calNinetyEight,
calNinetyNine,
calOneHundred,
calOneHundredOne,
calOneHundredTwo,
calOneHundredThree,
calOneHundredFour,
calOneHundredFive,
calOneHundredSix,
calOneHundredSeven,
calOneHundredEight,
calOneHundredNine,
calOneHundredTen,
calOneHundredEleven,
calOneHundredTwelve,
calOneHundredThirteen,
calOneHundredFourteen,
calOneHundredFifteen,
calOneHundredSixteen,
calOneHundredSeventeen,
calOneHundredEighteen,
calOneHundredNineteen,
calOneHundredTwenty,
calOneHundredTwentyOne,
calOneHundredTwentyTwo,
calOneHundredTwentyThree,
calOneHundredTwentyFour,
calOneHundredTwentyFive,
calOneHundredTwentySix,
calOneHundredTwentySeven,
calOneHundredTwentyEight,
calOneHundredTwentyNine,
calOneHundredThirty,
calOneHundredThirtyOne,
calOneHundredThirtyTwo,
calOneHundredThirtyThree,
calOneHundredThirtyFour,
calOneHundredThirtyFive,
calOneHundredThirtySix,
calOneHundredThirtySeven,
calOneHundredThirtyEight,
calOneHundredThirtyNine,
calOneHundredFourty,
calOneHundredFourtyOne,
calOneHundredFourtyTwo,
calOneHundredFourtyThree,
calOneHundredFourtyFour,
calOneHundredFourtyFive,
calOneHundredFourtySix ,
calOneHundredFourtySeven,
calOneHundredFourtyEight,
calOneHundredFourtyNine,
calOneHundredFifty,
calOneHundredFiftyOne,
// calOneHundredFiftyTwo,
// calOneHundredFiftyThree,
// calOneHundredFiftyFour,
// calOneHundredFiftyFive,
// calOneHundredFiftySix,
// calOneHundredFiftySeven,
// calOneHundredFiftyEight,
// calOneHundredFiftyNine,
// calOneHundredSixty,
// calOneHundredSixtyOne,
// calOneHundredSixtyTwo,
// calOneHundredSixtyThree,
// calOneHundredSixtyFour,
// calOneHundredSixtyFive,
// calOneHundredSixtySix,
// calOneHundredSixtySeven,
// calOneHundredSixtyEight,
// calOneHundredSixtyNine,
// calOneHundredSeventy,
// calOneHundredSeventyOne,
// calOneHundredSeventyTwo,
// calOneHundredSeventyThree,
// calOneHundredSeventyFour,
// calOneHundredSeventyFive,
// calOneHundredSeventySix,
// calOneHundredSeventySeven,
// calOneHundredSeventyEight,
// calOneHundredSeventyNine,
// calOneHundredEighty,
      })
    ).catch(async (res) => {
      const data = await res.json();

    });
    await dispatch(calendarStore.thunk_getAllCalendars()).then(
      (res) => res && history.push("/calendars/")
    );
  }
};








console.log(calOneHundredFiftyOne)
  const handleChange = (e) => {
    setChecked(!checked);
  };

console.log(markers)
  if(!spots){
    dispatch(spotStore.thunk_getAllSpots());
  }

  useEffect(() => {
    dispatch(spotStore.thunk_getAllSpots());


  }, [dispatch]);

  console.log("value: ", markers);

  return (
    <section className="background-container">
      <div className="">
        <div className="feed-buttons">
          {/* <div className="buttons-container">
            <button
              className=""
              onClick={() => setSpotState(spotReducer?.allSpots)}
            >
              Refresh Quotes
            </button>

          </div> */}
        </div>
        <div className="itemconfiguration">
          <div className="left_contentlist">
<div className="app">
        <form onSubmit={handleSubmite}>
          <table>
            <tr>
          <th className="white_text">Dates</th>
          <th className="white_text">P0</th>
          <th className="white_text">P1</th>
          <th className="white_text">P2</th>
          <th className="white_text">P3</th>
          <th className="white_text">P4</th>

          <th className="white_text">D0</th>
          <th className="white_text">D1</th>
          <th className="white_text">D2</th>
          <th className="white_text">D3</th>
          <th className="white_text">D4</th>




        </tr>



                      <tr key={key}><td className="white">
                      <Link>

                      2/20/2023</Link></td>
                      <td className=""><input type="checkbox" checked={calOne} onChange={(e) => setCalOne(!calOne)}/></td>
                      <td className=""><input type="checkbox" checked={calTwo} onChange={(e) => setCalTwo(!calTwo)}/> </td>
                      <td className=""><input type="checkbox" checked={calThree} onChange={(e) => setCalThree(!calThree)}/></td>
                      <td className=""><input type="checkbox" checked={calFour} onChange={(e) => setCalFour(!calFour)}/></td>
                      <td className=""> <input type="checkbox" checked={calFive} onChange={(e) => setCalFive(!calFive)}/></td>
                      <td className="white"><Autocomplete
            disablePortal
            id="cbd"
            value={calOneHundredFiftyOne}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
              setCalOneHundredFiftyOne(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>

                      <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                      <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                      <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>                       </tr>
                      <tr key={key}><td className="white">
                      <Link>

                      2/8/2023</Link></td>
                      <td className=""><input type="checkbox" checked={calSix} onChange={(e) => setCalSix(!calSix)}/></td>
                      <td className=""><input type="checkbox" checked={calSeven} onChange={(e) => setCalSeven(!calSeven)}/></td>
                      <td className=""><input type="checkbox" checked={calEight} onChange={(e) => setCalEight(!calEight)}/></td>
                      <td className=""><input type="checkbox" checked={calNine} onChange={(e) => setCalNine(!calNine)}/></td>
                      <td className=""><input type="checkbox" checked={calTen} onChange={(e) => setCalTen(!calTen)}/></td>
                      <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}     variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td> <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                      </tr>


                      <tr key={key}><td className="white">
                      <Link>

                      2/9/2023</Link></td>
                      <td className=""><input type="checkbox" checked={calEleven} onChange={(e) => setCalEleven(!calEleven)}/></td>
<td className=""><input type="checkbox" checked={calTwelve} onChange={(e) => setCalTwelve(!calTwelve)}/></td>
<td className=""><input type="checkbox" checked={calThirteen} onChange={(e) => setCalThirteen(!calThirteen)}/></td>
<td className=""><input type="checkbox" checked={calFourteen} onChange={(e) => setCalFourteen(!calFourteen)}/></td>
<td className=""><input type="checkbox" checked={calFifteen} onChange={(e) => setCalFifteen(!calFifteen)}/></td>
                      <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td> <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                          </tr>


                      <tr key={key}><td className="white">
                      <Link>

                      2/12/2023</Link></td>
                      <td className=""><input type="checkbox" checked={calSixteen} onChange={(e) => setCalSixteen(!calSixteen)}/></td>
<td className=""><input type="checkbox" checked={calSeventeen} onChange={(e) => setCalSeventeen(!calSeventeen)}/></td>
<td className=""><input type="checkbox" checked={calEighteen} onChange={(e) => setCalEighteen(!calEighteen)}/></td>
<td className=""><input type="checkbox" checked={calNineteen} onChange={(e) => setCalNineteen(!calNineteen)}/></td>
<td className=""><input type="checkbox" checked={calTwenty} onChange={(e) => setCalTwenty(!calTwenty)}/></td>
                          <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td> <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                      </tr>


                      <tr key={key}><td className="white">
                      <Link>

                      2/11/2023</Link></td>

                      <td className=""><input type="checkbox" checked={calTwentyOne} onChange={(e) => setCalTwentyOne(!calTwentyOne)}/></td>
<td className=""><input type="checkbox" checked={calTwentyTwo} onChange={(e) => setCalTwentyTwo(!calTwentyTwo)}/></td>
<td className=""><input type="checkbox" checked={calTwentyThree} onChange={(e) => setCalTwentyThree(!calTwentyThree)}/></td>
<td className=""><input type="checkbox" checked={calTwentyFour} onChange={(e) => setCalTwentyFour(!calTwentyFour)}/></td>
<td className=""><input type="checkbox" checked={calTwentyFive} onChange={(e) => setCalTwentyFive(!calTwentyFive)}/></td>
                      <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td> <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                  </tr>
                      <tr key={key}><td className="white">
                      <Link>

                      2/12/2023</Link></td>
                      <td className=""><input type="checkbox" checked={calTwentySix} onChange={(e) => setCalTwentySix(!calTwentySix)}/></td>
<td className=""><input type="checkbox" checked={calTwentySeven} onChange={(e) => setCalTwentySeven(!calTwentySeven)}/></td>
<td className=""><input type="checkbox" checked={calTwentyEight} onChange={(e) => setCalTwentyEight(!calTwentyEight)}/></td>
<td className=""><input type="checkbox" checked={calTwentyNine} onChange={(e) => setCalTwentyNine(!calTwentyNine)}/></td>
<td className=""><input type="checkbox" checked={calThirty} onChange={(e) => setCalThirty(!calThirty)}/></td>

                  <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td> <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                      </tr>
                      <tr key={key}><td className="white">
                      <Link>

                      2/13/2023</Link></td>

                      <td className=""><input type="checkbox" checked={calThirtyOne} onChange={(e) => setCalThirtyOne(!calThirtyOne)}/></td>
<td className=""><input type="checkbox" checked={calThirtyTwo} onChange={(e) => setCalThirtyTwo(!calThirtyTwo)}/></td>
<td className=""><input type="checkbox" checked={calThirtyThree} onChange={(e) => setCalThirtyThree(!calThirtyThree)}/></td>
<td className=""><input type="checkbox" checked={calThirtyFour} onChange={(e) => setCalThirtyFour(!calThirtyFour)}/></td>
<td className=""><input type="checkbox" checked={calThirtyFive} onChange={(e) => setCalThirtyFive(!calThirtyFive)}/></td>
                      <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td> <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>

                      </tr>


                      <tr key={key}><td className="white">
                      <Link>

                      2/14/2023</Link></td>
                      <td className=""><input type="checkbox" checked={calThirtySix} onChange={(e) => setCalThirtySix(!calThirtySix)}/></td>
<td className=""><input type="checkbox" checked={calThirtySeven} onChange={(e) => setCalThirtySeven(!calThirtySeven)}/></td>
<td className=""><input type="checkbox" checked={calThirtyEight} onChange={(e) => setCalThirtyEight(!calThirtyEight)}/></td>
<td className=""><input type="checkbox" checked={calThirtyNine} onChange={(e) => setCalThirtyNine(!calThirtyNine)}/></td>
<td className=""><input type="checkbox" checked={calFourty} onChange={(e) => setCalFourty(!calFourty)}/></td>


                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td> <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                      </tr>
                      <tr key={key}><td className="white">
                      <Link>

                      2/15/2023</Link></td>
                      <td className=""><input type="checkbox" checked={calFourtyOne} onChange={(e) => setCalFourtyOne(!calFourtyOne)}/></td>
<td className=""><input type="checkbox" checked={calFourtyTwo} onChange={(e) => setCalFourtyTwo(!calFourtyTwo)}/></td>
<td className=""><input type="checkbox" checked={calFourtyThree} onChange={(e) => setCalFourtyThree(!calFourtyThree)}/></td>
<td className=""><input type="checkbox" checked={calFourtyFour} onChange={(e) => setCalFourtyFour(!calFourtyFour)}/></td>
<td className=""><input type="checkbox" checked={calFourtyFive} onChange={(e) => setCalFourtyFive(!calFourtyFive)}/></td>

                      <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td> <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>

                      </tr>
                      <tr key={key}><td className="white">
                      <Link>

                      2/16/2023</Link></td>
                      <td className=""><input type="checkbox" checked={calFourtySix} onChange={(e) => setCalFourtySix(!calFourtySix)}/></td>
<td className=""><input type="checkbox" checked={calFourtySeven} onChange={(e) => setCalFourtySeven(!calFourtySeven)}/></td>
<td className=""><input type="checkbox" checked={calFourtyEight} onChange={(e) => setCalFourtyEight(!calFourtyEight)}/></td>
<td className=""><input type="checkbox" checked={calFourtyNine} onChange={(e) => setCalFourtyNine(!calFourtyNine)}/></td>
<td className=""><input type="checkbox" checked={calFifty} onChange={(e) => setCalFifty(!calFifty)}/></td>



                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td> <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                      </tr>
                      <tr key={key}><td className="white">
                      <Link>

                      2/17/2023</Link></td>

                      <td className=""><input type="checkbox" checked={calFiftyOne} onChange={(e) => setCalFiftyOne(!calFiftyOne)}/></td>
<td className=""><input type="checkbox" checked={calFiftyTwo} onChange={(e) => setCalFiftyTwo(!calFiftyTwo)}/></td>
<td className=""><input type="checkbox" checked={calFiftyThree} onChange={(e) => setCalFiftyThree(!calFiftyThree)}/></td>
<td className=""><input type="checkbox" checked={calFiftyFour} onChange={(e) => setCalFiftyFour(!calFiftyFour)}/></td>
<td className=""><input type="checkbox" checked={calFiftyFive} onChange={(e) => setCalFiftyFive(!calFiftyFive)}/></td>
                      <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td> <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>

                      </tr>
                      <tr key={key}><td className="white">
                      <Link>

                      2/18/2023</Link></td>
                      <td className=""><input type="checkbox" checked={calFiftySix} onChange={(e) => setCalFiftySix(!calFiftySix)}/></td>
<td className=""><input type="checkbox" checked={calFiftySeven} onChange={(e) => setCalFiftySeven(!calFiftySeven)}/></td>
<td className=""><input type="checkbox" checked={calFiftyEight} onChange={(e) => setCalFiftyEight(!calFiftyEight)}/></td>
<td className=""><input type="checkbox" checked={calFiftyNine} onChange={(e) => setCalFiftyNine(!calFiftyNine)}/></td>
<td className=""><input type="checkbox" checked={calSixty} onChange={(e) => setCalSixty(!calSixty)}/></td>


                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td> <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                      </tr>
                      <tr key={key}><td className="white">
                      <Link>

                      2/13/2023</Link></td>

                      <td className=""><input type="checkbox" checked={calSixtyOne} onChange={(e) => setCalSixtyOne(!calSixtyOne)}/></td>
<td className=""><input type="checkbox" checked={calSixtyTwo} onChange={(e) => setCalSixtyTwo(!calSixtyTwo)}/></td>
<td className=""><input type="checkbox" checked={calSixtyThree} onChange={(e) => setCalSixtyThree(!calSixtyThree)}/></td>
<td className=""><input type="checkbox" checked={calSixtyFour} onChange={(e) => setCalSixtyFour(!calSixtyFour)}/></td>
<td className=""><input type="checkbox" checked={calSixtyFive} onChange={(e) => setCalSixtyFive(!calSixtyFive)}/></td>
                      <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td> <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>

                      </tr>
                      <tr key={key}><td className="white">
                      <Link>

                      2/13/2023</Link></td>
                      <td className=""><input type="checkbox" checked={calSixtySix} onChange={(e) => setCalSixtySix(!calSixtySix)}/></td>
<td className=""><input type="checkbox" checked={calSixtySeven} onChange={(e) => setCalSixtySeven(!calSixtySeven)}/></td>
<td className=""><input type="checkbox" checked={calSixtyEight} onChange={(e) => setCalSixtyEight(!calSixtyEight)}/></td>
<td className=""><input type="checkbox" checked={calSixtyNine} onChange={(e) => setCalSixtyNine(!calSixtyNine)}/></td>
<td className=""><input type="checkbox" checked={calSeventy} onChange={(e) => setCalSeventy(!calSeventy)}/></td>


                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td> <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                      </tr>
                      <tr key={key}><td className="white">
                      <Link>

                      2/13/2023</Link></td>

                      <td className=""><input type="checkbox" checked={calSeventyOne} onChange={(e) => setCalSeventyOne(!calSeventyOne)}/></td>
<td className=""><input type="checkbox" checked={calSeventyTwo} onChange={(e) => setCalSeventyTwo(!calSeventyTwo)}/></td>
<td className=""><input type="checkbox" checked={calSeventyThree} onChange={(e) => setCalSeventyThree(!calSeventyThree)}/></td>
<td className=""><input type="checkbox" checked={calSeventyFour} onChange={(e) => setCalSeventyFour(!calSeventyFour)}/></td>
<td className=""><input type="checkbox" checked={calSeventyFive} onChange={(e) => setCalSeventyFive(!calSeventyFive)}/></td>
                      <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td> <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>

                      </tr>
                      <tr key={key}><td className="white">
                      <Link>

                      2/13/2023</Link></td>
                      <td className=""><input type="checkbox" checked={calSeventySix} onChange={(e) => setCalSeventySix(!calSeventySix)}/></td>
<td className=""><input type="checkbox" checked={calSeventySeven} onChange={(e) => setCalSeventySeven(!calSeventySeven)}/></td>
<td className=""><input type="checkbox" checked={calSeventyEight} onChange={(e) => setCalSeventyEight(!calSeventyEight)}/></td>
<td className=""><input type="checkbox" checked={calSeventyNine} onChange={(e) => setCalSeventyNine(!calSeventyNine)}/></td>
<td className=""><input type="checkbox" checked={calEighty} onChange={(e) => setCalEighty(!calEighty)}/></td>



                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td> <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                      </tr>
                      <tr key={key}><td className="white">
                      <Link>

                      2/13/2023</Link></td>

                      <td className=""><input type="checkbox" checked={calEightyOne} onChange={(e) => setCalEightyOne(!calEightyOne)}/></td>
<td className=""><input type="checkbox" checked={calEightyTwo} onChange={(e) => setCalEightyTwo(!calEightyTwo)}/></td>
<td className=""><input type="checkbox" checked={calEightyThree} onChange={(e) => setCalEightyThree(!calEightyThree)}/></td>
<td className=""><input type="checkbox" checked={calEightyFour} onChange={(e) => setCalEightyFour(!calEightyFour)}/></td>
<td className=""><input type="checkbox" checked={calEightyFive} onChange={(e) => setCalEightyFive(!calEightyFive)}/></td>
                      <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td> <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>

                      </tr>
                      <tr key={key}><td className="white">
                      <Link>

                      2/13/2023</Link></td>
                      <td className=""><input type="checkbox" checked={calEightySix} onChange={(e) => setCalEightySix(!calEightySix)}/></td>
<td className=""><input type="checkbox" checked={calEightySeven} onChange={(e) => setCalEightySeven(!calEightySeven)}/></td>
<td className=""><input type="checkbox" checked={calEightyEight} onChange={(e) => setCalEightyEight(!calEightyEight)}/></td>
<td className=""><input type="checkbox" checked={calEightyNine} onChange={(e) => setCalEightyNine(!calEightyNine)}/></td>
<td className=""><input type="checkbox" checked={calNinety} onChange={(e) => setCalNinety(!calNinety)}/></td>



                                   <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td> <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                      </tr>
                      <tr key={key}><td className="white">
                      <Link>

                      2/13/2023</Link></td>
                      <td className=""><input type="checkbox" checked={calNinetyOne} onChange={(e) => setCalNinetyOne(!calNinetyOne)}/></td>
<td className=""><input type="checkbox" checked={calNinetyTwo} onChange={(e) => setCalNinetyTwo(!calNinetyTwo)}/></td>
<td className=""><input type="checkbox" checked={calNinetyThree} onChange={(e) => setCalNinetyThree(!calNinetyThree)}/></td>
<td className=""><input type="checkbox" checked={calNinetyFour} onChange={(e) => setCalNinetyFour(!calNinetyFour)}/></td>
<td className=""><input type="checkbox" checked={calNinetyFive} onChange={(e) => setCalNinetyFive(!calNinetyFive)}/></td>



                                   <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td> <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                      </tr>
                      <tr key={key}><td className="white">
                      <Link>

                      2/13/2023</Link></td>
                      <td className=""><input type="checkbox" checked={calNinetySix} onChange={(e) => setCalNinetySix(!calNinetySix)}/></td>
<td className=""><input type="checkbox" checked={calNinetySeven} onChange={(e) => setCalNinetySeven(!calNinetySeven)}/></td>
<td className=""><input type="checkbox" checked={calNinetyEight} onChange={(e) => setCalNinetyEight(!calNinetyEight)}/></td>
<td className=""><input type="checkbox" checked={calNinetyNine} onChange={(e) => setCalNinetyNine(!calNinetyNine)}/></td>
<td className=""><input type="checkbox" checked={calOneHundred} onChange={(e) => setCalOneHundred(!calOneHundred)}/></td>




                                   <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td> <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                      </tr>
                      <tr key={key}><td className="white">
                      <Link>

                      2/13/2023</Link></td>
                      <td className=""><input type="checkbox" checked={calOneHundredOne} onChange={(e) => setCalOneHundredOne(!calOneHundredOne)}/></td>
<td className=""><input type="checkbox" checked={calOneHundredTwo} onChange={(e) => setCalOneHundredTwo(!calOneHundredTwo)}/></td>
<td className=""><input type="checkbox" checked={calOneHundredThree} onChange={(e) => setCalOneHundredThree(!calOneHundredThree)}/></td>
<td className=""><input type="checkbox" checked={calOneHundredFour} onChange={(e) => setCalOneHundredFour(!calOneHundredFour)}/></td>
<td className=""><input type="checkbox" checked={calOneHundredFive} onChange={(e) => setCalOneHundredFive(!calOneHundredFive)}/></td>



                                   <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td> <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                      </tr>
                      <tr key={key}><td className="white">
                      <Link>

                      2/13/2023</Link></td>
                      <td className=""><input type="checkbox" checked={calOneHundredSix} onChange={(e) => setCalOneHundredSix(!calOneHundredSix)}/></td>
<td className=""><input type="checkbox" checked={calOneHundredSeven} onChange={(e) => setCalOneHundredSeven(!calOneHundredSeven)}/></td>
<td className=""><input type="checkbox" checked={calOneHundredEight} onChange={(e) => setCalOneHundredEight(!calOneHundredEight)}/></td>
<td className=""><input type="checkbox" checked={calOneHundredNine} onChange={(e) => setCalOneHundredNine(!calOneHundredNine)}/></td>
<td className=""><input type="checkbox" checked={calOneHundredTen} onChange={(e) => setCalOneHundredTen(!calOneHundredTen)}/></td>



                                   <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td> <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                      </tr>
                      <tr key={key}><td className="white">
                      <Link>

                      2/13/2023</Link></td>
                      <td className=""><input type="checkbox" checked={calOneHundredEleven} onChange={(e) => setCalOneHundredEleven(!calOneHundredEleven)}/></td>
<td className=""><input type="checkbox" checked={calOneHundredTwelve} onChange={(e) => setCalOneHundredTwelve(!calOneHundredTwelve)}/></td>
<td className=""><input type="checkbox" checked={calOneHundredThirteen} onChange={(e) => setCalOneHundredThirteen(!calOneHundredThirteen)}/></td>
<td className=""><input type="checkbox" checked={calOneHundredFourteen} onChange={(e) => setCalOneHundredFourteen(!calOneHundredFourteen)}/></td>
<td className=""><input type="checkbox" checked={calOneHundredFifteen} onChange={(e) => setCalOneHundredFifteen(!calOneHundredFifteen)}/></td>



                                   <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td> <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                      </tr>
                      <tr key={key}><td className="white">
                      <Link>

                      2/13/2023</Link></td>
                      <td className=""><input type="checkbox" checked={calOneHundredSixteen} onChange={(e) => setCalOneHundredSixteen(!calOneHundredSixteen)}/></td>
<td className=""><input type="checkbox" checked={calOneHundredSeventeen} onChange={(e) => setCalOneHundredSeventeen(!calOneHundredSeventeen)}/></td>
<td className=""><input type="checkbox" checked={calOneHundredEighteen} onChange={(e) => setCalOneHundredEighteen(!calOneHundredEighteen)}/></td>
<td className=""><input type="checkbox" checked={calOneHundredNineteen} onChange={(e) => setCalOneHundredNineteen(!calOneHundredNineteen)}/></td>
<td className=""><input type="checkbox" checked={calOneHundredTwenty} onChange={(e) => setCalOneHundredTwenty(!calOneHundredTwenty)}/></td>



                                   <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td> <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                      </tr>
                      <tr key={key}><td className="white">
                      <Link>

                      2/13/2023</Link></td>
                      <td className=""><input type="checkbox" checked={calOneHundredTwentyOne} onChange={(e) => setCalOneHundredTwentyOne(!calOneHundredTwentyOne)}/></td>
<td className=""><input type="checkbox" checked={calOneHundredTwentyTwo} onChange={(e) => setCalOneHundredTwentyTwo(!calOneHundredTwentyTwo)}/></td>
<td className=""><input type="checkbox" checked={calOneHundredTwentyThree} onChange={(e) => setCalOneHundredTwentyThree(!calOneHundredTwentyThree)}/></td>
<td className=""><input type="checkbox" checked={calOneHundredTwentyFour} onChange={(e) => setCalOneHundredTwentyFour(!calOneHundredTwentyFour)}/></td>
<td className=""><input type="checkbox" checked={calOneHundredTwentyFive} onChange={(e) => setCalOneHundredTwentyFive(!calOneHundredTwentyFive)}/></td>




                                   <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td> <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                      </tr>
                      <tr key={key}><td className="white">
                      <Link>

                      2/13/2023</Link></td>
                      <td className=""><input type="checkbox" checked={calOneHundredTwentySix} onChange={(e) => setCalOneHundredTwentySix(!calOneHundredTwentySix)}/></td>
<td className=""><input type="checkbox" checked={calOneHundredTwentySeven} onChange={(e) => setCalOneHundredTwentySeven(!calOneHundredTwentySeven)}/></td>
<td className=""><input type="checkbox" checked={calOneHundredTwentyEight} onChange={(e) => setCalOneHundredTwentyEight(!calOneHundredTwentyEight)}/></td>
<td className=""><input type="checkbox" checked={calOneHundredTwentyNine} onChange={(e) => setCalOneHundredTwentyNine(!calOneHundredTwentyNine)}/></td>
<td className=""><input type="checkbox" checked={calOneHundredThirty} onChange={(e) => setCalOneHundredThirty(!calOneHundredThirty)}/></td>



                                   <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td> <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                      </tr>
                      <tr key={key}><td className="white">
                      <Link>

                      2/13/2023</Link></td>
                      <td className=""><input type="checkbox" checked={calOneHundredThirtyOne} onChange={(e) => setCalOneHundredThirtyOne(!calOneHundredThirtyOne)}/></td>
<td className=""><input type="checkbox" checked={calOneHundredThirtyTwo} onChange={(e) => setCalOneHundredThirtyTwo(!calOneHundredThirtyTwo)}/></td>
<td className=""><input type="checkbox" checked={calOneHundredThirtyThree} onChange={(e) => setCalOneHundredThirtyThree(!calOneHundredThirtyThree)}/></td>
<td className=""><input type="checkbox" checked={calOneHundredThirtyFour} onChange={(e) => setCalOneHundredThirtyFour(!calOneHundredThirtyFour)}/></td>
<td className=""><input type="checkbox" checked={calOneHundredThirtyFive} onChange={(e) => setCalOneHundredThirtyFive(!calOneHundredThirtyFive)}/></td>



                                   <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td> <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                      </tr>
                      <tr key={key}><td className="white">
                      <Link>

                      2/13/2023</Link></td>
                      <td className=""><input type="checkbox" checked={calOneHundredThirtySix} onChange={(e) => setCalOneHundredThirtySix(!calOneHundredThirtySix)}/></td>
<td className=""><input type="checkbox" checked={calOneHundredThirtySeven} onChange={(e) => setCalOneHundredThirtySeven(!calOneHundredThirtySeven)}/></td>
<td className=""><input type="checkbox" checked={calOneHundredThirtyEight} onChange={(e) => setCalOneHundredThirtyEight(!calOneHundredThirtyEight)}/></td>
<td className=""><input type="checkbox" checked={calOneHundredThirtyNine} onChange={(e) => setCalOneHundredThirtyNine(!calOneHundredThirtyNine)}/></td>
<td className=""><input type="checkbox" checked={calOneHundredFourty} onChange={(e) => setCalOneHundredFourty(!calOneHundredFourty)}/></td>




                                   <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td> <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                      </tr>
                      <tr key={key}><td className="white">
                      <Link>

                      2/13/2023</Link></td>
                      <td className=""><input type="checkbox" checked={calOneHundredFourtyOne} onChange={(e) => setCalOneHundredFourtyOne(!calOneHundredFourtyOne)}/></td>
<td className=""><input type="checkbox" checked={calOneHundredFourtyTwo} onChange={(e) => setCalOneHundredFourtyTwo(!calOneHundredFourtyTwo)}/></td>
<td className=""><input type="checkbox" checked={calOneHundredFourtyThree} onChange={(e) => setCalOneHundredFourtyThree(!calOneHundredFourtyThree)}/></td>
<td className=""><input type="checkbox" checked={calOneHundredFourtyFour} onChange={(e) => setCalOneHundredFourtyFour(!calOneHundredFourtyFour)}/></td>
<td className=""><input type="checkbox" checked={calOneHundredFourtyFive} onChange={(e) => setCalOneHundredFourtyFive(!calOneHundredFourtyFive)}/></td>




                                   <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td> <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                      </tr>
                      <tr key={key}><td className="white">
                      <Link>

                      2/13/2023</Link></td>
                      <td className=""><input type="checkbox" checked={calOneHundredFourtySix } onChange={(e) => setCalOneHundredFourtySix (!calOneHundredFourtySix )}/></td>
<td className=""><input type="checkbox" checked={calOneHundredFourtySeven} onChange={(e) => setCalOneHundredFourtySeven(!calOneHundredFourtySeven)}/></td>
<td className=""><input type="checkbox" checked={calOneHundredFourtyEight} onChange={(e) => setCalOneHundredFourtyEight(!calOneHundredFourtyEight)}/></td>
<td className=""><input type="checkbox" checked={calOneHundredFourtyNine} onChange={(e) => setCalOneHundredFourtyNine(!calOneHundredFourtyNine)}/></td>
<td className=""><input type="checkbox" checked={calOneHundredFifty} onChange={(e) => setCalOneHundredFifty(!calOneHundredFifty)}/></td>



                                   <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td> <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                     <td className=""><Autocomplete
            disablePortal
            id="cbd"
            value={markers}

            options={directions.map((option) => option.direction)}
            onChange={(event, newValue) => {
              setMarkers(newValue);
            }}

          multiple={true}
            freeSolo='true'
            // defaultValue={[directions[0].direction]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip  label={option} {...getTagProps({ index })} />
            ))
          }
            sx={{ width: '100%', height: '100%', padding: '0px',verticalAlign: 'center', right: '100%'}}
      renderInput={(params) =>  <TextField  {...params}  placeholder="Directions"   variant="filled"/>}

    /></td>
                      </tr>




              </table>
              <Button style={{
          borderRadius: 10,
          backgroundColor: "black",
          marginBottom: 20,
          }}
          onClick={() => {
            setCalendarState(calendarReducer?.allCalendar)
              }}

          type="submit" variant="contained">Save Peak & Demand
        </Button>

              </form>
              </div>
          </div>



        </div>
      </div>
    </section>
  );
}

export default Calendar;
