import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({                             //faz com que o torne elegível para ser um componente
    templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit {            //export deixa o arquivo público para ser importado por outros

    filteredCourses: Course[] = [];

    _courses: Course[] = [];

    _filterBy!: string;

    constructor(private courseService: CourseService) { }

    ngOnInit(): void {
        this.retrieveAll();
    }

    retrieveAll(): void {
        this.courseService.retrieveAll().subscribe({
            next: courses => {
                this._courses = courses;
                this.filteredCourses = this._courses;
            },
            error: err => console.log('Error', err)
        })
    }

    deleteById(courseId: number): void {                                //deletar curso da lista
        this.courseService.deleteById(courseId).subscribe({
            next: () => {
                console.log('Delete with success');
                this.retrieveAll();
            },
            error: err => console.log('Error', err)
        })
    }
    
    set filter(value: string) {
        this._filterBy = value;

        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }

    get filter() {
        return this._filterBy;
    }

}