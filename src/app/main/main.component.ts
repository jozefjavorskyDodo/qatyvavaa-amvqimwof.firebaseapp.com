

import { Component } from "@angular/core";


@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})


export class MainComponent {


  subs_coloring(): void {
    <string>(
      String("use strict")
    );
    try {
      var sub_00: any = document.querySelectorAll(
        <string>(
          String(".sub00")
        ));
      var sub_01: any = document.querySelectorAll(
        <string>(
          String(".sub01")
        ));
      var sub_02: any = document.querySelectorAll(
        <string>(
          String(".sub02")
        ));
      var sub_10: any = document.querySelectorAll(
        <string>(
          String(".sub10")
        ));
      var sub_11: any = document.querySelectorAll(
        <string>(
          String(".sub11")
        ));
      var sub_12: any = document.querySelectorAll(
        <string>(
          String(".sub12")
        ));
      var sub_20: any = document.querySelectorAll(
        <string>(
          String(".sub20")
        ));
      var sub_21: any = document.querySelectorAll(
        <string>(
          String(".sub21")
        ));
      var sub_22: any = document.querySelectorAll(
        <string>(
          String(".sub22")
        ));
      [...sub_00, ...sub_11, ...sub_22].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(
          String("rgb(244, 67, 54)")
        )
      });
      [...sub_01, ...sub_12, ...sub_20].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(
          String("rgb(105, 240, 174)")
        )
      });
      [...sub_02, ...sub_10, ...sub_21].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(
          String("rgb(123, 31, 162)")
        )
      });
    } catch (err_2) {
      if (err_2) {
        console.clear();
        console.log(err_2);
      };
    };
  };





  rows_coloring(): void {
    <string>(
      String("use strict")
    );
    try {
      var y_0: any = document.querySelectorAll(
        <string>(
          String(".y0")
        ));
      var y_1: any = document.querySelectorAll(
        <string>(
          String(".y1")
        ));
      var y_2: any = document.querySelectorAll(
        <string>(
          String(".y2")
        ));
      var y_3: any = document.querySelectorAll(
        <string>(
          String(".y3")
        ));
      var y_4: any = document.querySelectorAll(
        <string>(
          String(".y4")
        ));
      var y_5: any = document.querySelectorAll(
        <string>(
          String(".y5")
        ));
      var y_6: any = document.querySelectorAll(
        <string>(
          String(".y6")
        ));
      var y_7: any = document.querySelectorAll(
        <string>(
          String(".y7")
        ));
      var y_8: any = document.querySelectorAll(
        <string>(
          String(".y8")
        ));
      [...y_0, ...y_3, ...y_6].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(
          String("rgb(244, 67, 54)")
        )
      });
      [...y_1, ...y_4, ...y_7].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(
          String("rgb(105, 240, 174)")
        )
      });
      [...y_2, ...y_5, ...y_8].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(
          String("rgb(123, 31, 162)")
        )
      });
    } catch (err_3) {
      if (err_3) {
        console.clear();
        console.log(err_3);
      };
    };
  };





  cols_coloring(): void {
    <string>(
      String("use strict")
    );
    try {
      var x_0: any = document.querySelectorAll(
        <string>(
          String(".x0")
        ));
      var x_1: any = document.querySelectorAll(
        <string>(
          String(".x1")
        ));
      var x_2: any = document.querySelectorAll(
        <string>(
          String(".x2")
        ));
      var x_3: any = document.querySelectorAll(
        <string>(
          String(".x3")
        ));
      var x_4: any = document.querySelectorAll(
        <string>(
          String(".x4")
        ));
      var x_5: any = document.querySelectorAll(
        <string>(
          String(".x5")
        ));
      var x_6: any = document.querySelectorAll(
        <string>(
          String(".x6")
        ));
      var x_7: any = document.querySelectorAll(
        <string>(
          String(".x7")
        ));
      var x_8: any = document.querySelectorAll(
        <string>(
          String(".x8")
        ));
      [...x_0, ...x_3, ...x_6].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(
          String("rgb(244, 67, 54)")
        )
      });
      [...x_1, ...x_4, ...x_7].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(
          String("rgb(105, 240, 174)")
        )
      });
      [...x_2, ...x_5, ...x_8].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(
          String("rgb(123, 31, 162)")
        )
      });
    } catch (err_4) {
      if (err_4) {
        console.clear();
        console.log(err_4);
      };
    };
  };




  null_coloring(): void {
    <string>(
      String("use strict")
    );
    try {
      var _tds_: any = document.querySelectorAll(
        <string>(
          String("td")
        ));
      [..._tds_].forEach((cubicle) => {
        cubicle.style.borderColor = <string>(
          String("rgb(122, 122, 122)")
        )
      });
    } catch (err_5) {
      if (err_5) {
        console.clear();
        console.log(err_5);
      };
    };
  };




  i_fT_tF_o(): void {
    <string>(
      String("use strict")
    );
    try {
      var ___0r: number[] = [];
      var _clls_: any = document.querySelectorAll(
        <string>(
          String("td")
        )
      );
      [..._clls_].forEach((cubicle) => {
        cubicle.innerHTML = <string>(
          String('0')
        );
      });
      while (
        <number>(
          Number(___0r.length)
        )
        <
        <number>(
          Number(9)
        )
      ) {
        var pos_new_int_val: number = <number>(
          Number(Math.floor(Math.random()
            *
            <number>(
              Number(9)
            ))
            +
            <number>(
              Number(1)
            )
          )
        );
        if (
          <boolean>(
            Boolean(___0r.includes(
              <number>(
                Number(pos_new_int_val)
              ))))
          ===
          <boolean>(
            Boolean(false)
          )
        ) {
          ___0r.push(
            <number>(
              Number(pos_new_int_val)
            ));
        };
      };
      for (
        var indx_iter: number = <number>(
          Number(0)
        );
        indx_iter <= <number>(
          Number(8)
        );
        indx_iter += <number>(
          Number(1)
        )
      ) {
        _clls_[
          <number>(
            Number(indx_iter)
          )].innerHTML = <string>(
            String(___0r[
              <number>(
                Number(indx_iter)
              )])
          );
      };
      _clls_[
        <number>(
          Number(9)
        )].innerHTML = <string>(
          String(___0r[
            <number>(
              Number(6)
            )]));
      _clls_[
        <number>(
          Number(10)
        )].innerHTML = <string>(
          String(___0r[
            <number>(
              Number(7)
            )]));
      _clls_[
        <number>(
          Number(11)
        )].innerHTML = <string>(
          String(___0r[
            <number>(
              Number(8)
            )]));
      _clls_[
        <number>(
          Number(21)
        )].innerHTML = <string>(
          String(___0r[
            <number>(
              Number(6)
            )]));
      _clls_[
        <number>(
          Number(22)
        )].innerHTML = <string>(
          String(___0r[
            <number>(
              Number(7)
            )]));
      _clls_[
        <number>(
          Number(23)
        )].innerHTML = <string>(
          String(___0r[
            <number>(
              Number(8)
            )]));
      for (
        var indx_iter: number = <number>(
          Number(0)
        );
        indx_iter <= <number>(
          Number(8)
        );
        indx_iter += <number>(
          Number(1)
        )
      ) {
        _clls_[
          <number>(
            Number(indx_iter)
            +
            <number>(
              Number(12)
            )
          )].innerHTML = <string>(
            String(___0r[
              <number>(
                Number(indx_iter)
              )])
          );
      };
      _clls_[
        <number>(
          Number(18)
        )].innerHTML = <string>(
          String(___0r[
            <number>(
              Number(3)
            )]));
      _clls_[
        <number>(
          Number(19)
        )].innerHTML = <string>(
          String(___0r[
            <number>(
              Number(4)
            )]));
      _clls_[
        <number>(
          Number(20)
        )].innerHTML = <string>(
          String(___0r[
            <number>(
              Number(5)
            )]));
      _clls_[
        <number>(
          Number(24)
        )].innerHTML = <string>(
          String(___0r[
            <number>(
              Number(0)
            )]));
      _clls_[
        <number>(
          Number(25)
        )].innerHTML = <string>(
          String(___0r[
            <number>(
              Number(1)
            )]));
      _clls_[
        <number>(
          Number(26)
        )].innerHTML = <string>(
          String(___0r[
            <number>(
              Number(2)
            )]));
      for (
        var indx_iter: number = <number>(
          Number(0)
        );
        indx_iter <= <number>(
          Number(26)
        );
        indx_iter += <number>(
          Number(1)
        )
      ) {
        _clls_[
          <number>(
            Number(indx_iter)
          )].style.color = <string>(
            String("rgb(244, 244, 244)")
          );
      };
      {
        for (
          var ___10t: number = <number>(
            Number(1)
          );
          ___10t <= <number>(
            Number(10)
          );
          ___10t += <number>(
            Number(1)
          )
        ) {
          this.fT_tF();
        };
      };
      {
        var null_flag: boolean = <boolean>(
          Boolean(false)
        );
        var _cubicles_: any = document.querySelectorAll(
          <string>(
            String("td")
          ));
        for (
          var anot_indx_iter: number = <number>(
            Number(0)
          );
          anot_indx_iter <= <number>(
            Number(80)
          );
          anot_indx_iter += <number>(
            Number(1)
          )
        ) {
          if (
            <string>(
              String(_cubicles_[
                <number>(
                  Number(anot_indx_iter)
                )].innerHTML))
            ===
            <string>(
              String('0')
            )
          ) {
            null_flag = <boolean>(
              Boolean(true)
            );
          };
        };
        if (
          <boolean>(
            Boolean(null_flag)
          )
          ===
          <boolean>(
            Boolean(false)
          )
        ) {
          var pseudo_random_indexes: number[] = [];
          var generate_bttn: any = document.querySelector(
            <string>(
              String("#generate-bttn")
            ));
          var solve_bttn: any = document.querySelector(
            <string>(
              String("#solve-bttn")
            ));
          while (
            <number>(
              Number(pseudo_random_indexes.length)
            )
            <
            <number>(
              Number(40)
            )
          ) {
            var prob_poss_new_int_indx: number = <number>(
              Number(Math.floor(Math.random()
                *
                <number>(
                  Number(81)
                )
              )
              ));
            if (
              <boolean>(
                Boolean(pseudo_random_indexes.includes(
                  <number>(
                    Number(prob_poss_new_int_indx)
                  ))))
              ===
              <boolean>(
                Boolean(false)
              )
            ) {
              pseudo_random_indexes.push(
                <number>(
                  Number(prob_poss_new_int_indx)
                ));
            };
          };
          for (
            var ___anot_iter_yindex: number = <number>(
              Number(0)
            );
            ___anot_iter_yindex <= <number>(
              Number(39)
            );
            ___anot_iter_yindex += <number>(
              Number(1)
            )
          ) {
            _cubicles_[
              <number>(
                Number(pseudo_random_indexes[
                  <number>(
                    Number(___anot_iter_yindex)
                  )]))].style.color = <string>(
                    String("rgb(0, 0, 0)")
                  );
          };
          generate_bttn.style.visibility = <string>(
            String("hidden")
          );
          solve_bttn.style.visibility = <string>(
            String("visible")
          );
        } else {
          [..._cubicles_].forEach((cubicle) => {
            cubicle.innerHTML = <string>(
              String('0')
            );
            cubicle.style.color = <string>(
              String("rgb(0, 0, 0)")
            );
          });
          {
            this.i_fT_tF_o();
          };
        };
      };
    } catch (err_6) {
      if (err_6) {
        console.clear();
        console.log(err_6);
      };
    };
  };





  fT_tF(): void {
    <string>(
      String("use strict")
    );
    try {
      var ___clls: any = document.querySelectorAll(
        <string>(
          String("td")
        ));
      for (
        var indx___iter: number = <number>(
          Number(27)
        );
        indx___iter <= <number>(
          Number(80)
        );
        indx___iter += <number>(
          Number(1)
        )
      ) {
        var its_sub: any = document.querySelectorAll(
          <string>(
            <string>(
              String('.')
            )
            +
            <string>(
              String(___clls[
                <number>(
                  Number(indx___iter)
                )].getAttribute(
                  <string>(
                    String("class")
                  ))).split(
                    <string>(
                      String(' ')
                    ))[
              <number>(
                Number(0)
              )]
            )
          ));
        var its___y: any = document.querySelectorAll(
          <string>(
            <string>(
              String('.')
            )
            +
            <string>(
              String(___clls[
                <number>(
                  Number(indx___iter)
                )].getAttribute(
                  <string>(
                    String("class")
                  ))).split(
                    <string>(
                      String(' ')
                    ))[
              <number>(
                Number(1)
              )]
            )
          ));
        var its___x: any = document.querySelectorAll(
          <string>(
            <string>(
              String('.')
            )
            +
            <string>(
              String(___clls[
                <number>(
                  Number(indx___iter)
                )].getAttribute(
                  <string>(
                    String("class")
                  ))).split(
                    <string>(
                      String(' ')
                    ))[
              <number>(
                Number(2)
              )]
            )
          ));
        var sub_vals: number[] | string[] | any[] = [];
        var y___vals: number[] | string[] | any[] = [];
        var x___vals: number[] | string[] | any[] = [];
        for (
          var index_9terator: number = <number>(
            Number(0)
          );
          index_9terator <= <number>(
            Number(8)
          );
          index_9terator += <number>(
            Number(1)
          )
        ) {
          sub_vals.push(
            <number>(
              Number(its_sub[
                <number>(
                  Number(index_9terator)
                )].innerHTML)));
          y___vals.push(
            <number>(
              Number(its___y[
                <number>(
                  Number(index_9terator)
                )].innerHTML)));
          x___vals.push(
            <number>(
              Number(its___x[
                <number>(
                  Number(index_9terator)
                )].innerHTML)));
        };
        for (
          var ___prob_poss_new_int_val: number = <number>(
            Number(1)
          );
          ___prob_poss_new_int_val <= <number>(
            Number(9)
          );
          ___prob_poss_new_int_val += <number>(
            Number(1)
          )
        ) {
          if (
            (
              <boolean>(
                Boolean(sub_vals.includes(
                  <number>(
                    Number(___prob_poss_new_int_val)
                  ))))
              ===
              <boolean>(
                Boolean(false)
              )
            )
            &&
            (
              <boolean>(
                Boolean(y___vals.includes(
                  <number>(
                    Number(___prob_poss_new_int_val)
                  ))))
              ===
              <boolean>(
                Boolean(false)
              )
            )
            &&
            (
              <boolean>(
                Boolean(x___vals.includes(
                  <number>(
                    Number(___prob_poss_new_int_val)
                  ))))
              ===
              <boolean>(
                Boolean(false)
              )
            )
          ) {
            ___clls[
              <number>(
                Number(indx___iter)
              )].innerHTML = <string>(
                String(___prob_poss_new_int_val)
              );
            ___clls[
              <number>(
                Number(indx___iter)
              )].style.color = <string>(
                String("rgb(244, 244, 244)")
              );
          };
        };
        if (
          <string>(
            String(___clls[
              <number>(
                Number(indx___iter)
              )].innerHTML)
          )
          ===
          <string>(
            String('0')
          )
        ) {
          break;
        };
      };
    } catch (err_7) {
      if (err_7) {
        console.clear();
        console.log(err_7);
      };
    };
  };



  rerender_UI_state(): void {
    <string>(String("use strict"));
    try {
      var _tds_cubicles_: any = document.querySelectorAll(
        <string>(
          String("td")
        ));
      var generate__bttn_: any = document.querySelector(
        <string>(
          String("#generate-bttn")
        ));
      var solve_____bttn_: any = document.querySelector(
        <string>(
          String("#solve-bttn")
        ));
      [..._tds_cubicles_].forEach((td_cubicle) => {
        td_cubicle.style.color = <string>(
          String("rgb(244, 244, 244)")
        );
      });
      generate__bttn_.style.visibility = <string>(
        String("visible")
      );
      solve_____bttn_.style.visibility = <string>(
        String("hidden")
      );
    } catch (err_8) {
      if (err_8) {
        console.clear();
        console.log(err_8);
      };
    };
  };


};
